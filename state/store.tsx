import persistMiddleware from '@/middlewares/persistMiddleware';
import syncMiddleware from '@/middlewares/syncMiddleware';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authReducer from './slices/auth-slice';
import listsReducer from './slices/lists-slice';
import marketHistoryReducer from './slices/market-history-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lists: listsReducer,
    marketHistory: marketHistoryReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(persistMiddleware, syncMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;