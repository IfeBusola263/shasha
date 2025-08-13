import persistMiddleware from '@/middlewares/persistMiddleware';
import syncMiddleware from '@/middlewares/syncMiddleware';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { thunk } from 'redux-thunk';
import listsReducer from './slices/lists-slice';

export const store = configureStore({
  reducer: {
    lists: listsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk, persistMiddleware, syncMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();