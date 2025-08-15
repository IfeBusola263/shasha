import { MarketRun } from '@/types';
import { dummyMarketLists } from '@/utils/dummyList';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const ITEMS_PER_PAGE = 10;

type initialStateProps = {
    allItems: MarketRun[];
    displayedItems: MarketRun[];
    currentPage: number;
    totalPages: number;
    isLoading: boolean;
    hasMoreData: boolean;
}

const initialState: initialStateProps = {
  allItems: dummyMarketLists,
  displayedItems: dummyMarketLists.slice(0, ITEMS_PER_PAGE),
  currentPage: 1,
  totalPages: Math.ceil(dummyMarketLists.length / ITEMS_PER_PAGE),
  isLoading: false,
  hasMoreData: dummyMarketLists.length > ITEMS_PER_PAGE,
};

const marketHistorySlice = createSlice({
  name: 'marketHistory',
  initialState,
  reducers: {
    loadMoreItems: (state) => {
      if (state.hasMoreData && !state.isLoading) {
        state.isLoading = true;
      }
    },
    loadMoreItemsSuccess: (state) => {
      const nextPage = state.currentPage + 1;
      const startIndex = (nextPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      const newItems = state.allItems.slice(startIndex, endIndex);
      
      state.displayedItems = [...state.displayedItems, ...newItems];
      state.currentPage = nextPage;
      state.isLoading = false;
      state.hasMoreData = endIndex < state.allItems.length;
    },
    refreshItems: (state) => {
      state.displayedItems = state.allItems.slice(0, ITEMS_PER_PAGE);
      state.currentPage = 1;
      state.hasMoreData = state.allItems.length > ITEMS_PER_PAGE;
      state.isLoading = false;
    },
    setItems: (state, action: PayloadAction<MarketRun[]>) => {
      state.allItems = action.payload;
      state.totalPages = Math.ceil(action.payload.length / ITEMS_PER_PAGE);
      state.displayedItems = action.payload.slice(0, ITEMS_PER_PAGE);
      state.currentPage = 1;
      state.hasMoreData = action.payload.length > ITEMS_PER_PAGE;
    }
  },
});

export const { 
  loadMoreItems, 
  loadMoreItemsSuccess, 
  refreshItems, 
  setItems 
} = marketHistorySlice.actions;

export default marketHistorySlice.reducer;

// Selector
export const stateData = (state: RootState) => state.marketHistory;