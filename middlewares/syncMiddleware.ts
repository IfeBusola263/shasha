import { Middleware } from '@reduxjs/toolkit';

const syncMiddleware: Middleware = (storeAPI) => (next) => (action) => {
  const result = next(action);

  // If a list changes, we inform the sync manager (placeholder action)
  if (action.type.startsWith('lists/')) {
    // For now, we just set a flag; in a full implementation we'd enqueue network ops.
    // e.g. storeAPI.dispatch(enqueueOfflineAction({ type: action.type, payload: action.payload }));
  }

  return result;
};

export default syncMiddleware;