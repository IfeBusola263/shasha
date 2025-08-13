import { ListsState } from '@/state/slices/lists-slice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LISTS_KEY = 'shasha:lists:v1';

export async function saveListsToStorage(state: ListsState) {
  try {
    await AsyncStorage.setItem(LISTS_KEY, JSON.stringify({ byId: state.byId, allIds: state.allIds }));
  } catch (e) {
    // handle/write logs
    console.warn('Failed saving lists', e);
  }
}

export async function loadListsFromStorage(): Promise<Partial<ListsState> | null> {
  try {
    const raw = await AsyncStorage.getItem(LISTS_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return { byId: parsed.byId ?? {}, allIds: parsed.allIds ?? [] } as Partial<ListsState>;
  } catch (e) {
    console.warn('Failed loading lists', e);
    return null;
  }
}
export async function clearListsStorage() {
  try {
    await AsyncStorage.removeItem(LISTS_KEY);
  } catch (e) {
    console.warn('Failed clearing lists storage', e);
  }
}