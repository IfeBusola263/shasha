import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadListsFromStorage, saveListsToStorage } from '../../services/storage/localStorage';
import { ListItem, MarketList } from '../../types';

export type ListsState = {
  byId: Record<string, MarketList>;
  allIds: string[];
  selectedListId: string | null;
  meta: { isLoading: boolean; isSyncing: boolean; lastSyncedAt?: string | null };
};

const initialState: ListsState = {
  byId: {},
  allIds: [],
  selectedListId: null,
  meta: { isLoading: false, isSyncing: false, lastSyncedAt: null },
};

// Async thunks
export const rehydrateLists = createAsyncThunk('lists/rehydrate', async () => {
  const lists = await loadListsFromStorage();
  return lists;
});

export const persistLists = createAsyncThunk('lists/persist', async (stateSnapshot: ListsState) => {
  await saveListsToStorage(stateSnapshot);
  return true;
});

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    createList(state, action: PayloadAction<MarketList>) {
      const l = action.payload;
      state.byId[l.id] = l;
      state.allIds.unshift(l.id);
    },
    updateList(state, action: PayloadAction<{ id: string; patch: Partial<MarketList> }>) {
      const { id, patch } = action.payload;
      if (state.byId[id]) {
        state.byId[id] = { ...state.byId[id], ...patch, updatedAt: new Date().toISOString() };
      }
    },
    deleteList(state, action: PayloadAction<string>) {
      const id = action.payload;
      delete state.byId[id];
      state.allIds = state.allIds.filter((x) => x !== id);
    },
    addItemToList(state, action: PayloadAction<{ listId: string; item: ListItem }>) {
      const { listId, item } = action.payload;
      const list = state.byId[listId];
      if (list) {
        list.items.push(item);
        list.updatedAt = new Date().toISOString();
      }
    },
    // local-only UI helpers
    setSelectedListId(state, action: PayloadAction<string | null>) {
      state.selectedListId = action.payload;
    },
    setIsSyncing(state, action: PayloadAction<boolean>) {
      state.meta.isSyncing = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(rehydrateLists.fulfilled, (state, action) => {
      if (action.payload) {
        state.byId = action.payload.byId ?? {};
        state.allIds = action.payload.allIds ?? [];
      }
      state.meta.isLoading = false;
    });
    builder.addCase(rehydrateLists.pending, (state) => {
      state.meta.isLoading = true;
    });
    builder.addCase(rehydrateLists.rejected, (state) => {
      state.meta.isLoading = false;
    });
  },
});

export const { createList, updateList, deleteList, addItemToList, setSelectedListId, setIsSyncing } = listsSlice.actions;
export default listsSlice.reducer;