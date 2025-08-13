import { Middleware } from '@reduxjs/toolkit';
import debounce from 'lodash.debounce';
import { persistLists } from '../state/slices/lists-slice';

const schedulePersist = debounce((dispatch, getState) => {
  // Pass a snapshot of lists state to persist thunk
  const state = getState();
  dispatch(persistLists(state.lists));
}, 700);

const persistMiddleware: Middleware = (storeAPI) => (next) => (action) => {
  const result = next(action);

  // Persist on actions that modify lists (crud)
  if (action.type.startsWith('lists/')) {
    schedulePersist(storeAPI.dispatch, storeAPI.getState);
  }

  return result;
};

export default persistMiddleware;
