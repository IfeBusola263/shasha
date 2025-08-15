import { loadMoreItems, loadMoreItemsSuccess, refreshItems, setItems, stateData } from "@/state/slices/market-history-slice";
import { useAppDispatch, useAppSelector } from "@/state/store";
import { type MarketList } from "@/types";
import { useCallback, useState } from "react";

const useMarketHistory = () => {
    const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const { totalPages, displayedItems, isLoading, hasMoreData, currentPage} = useAppSelector(stateData);

    // const handleLoadMore = () => dispatch(loadMoreItems());

    const simulateAsyncLoad = useCallback(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
            resolve(null);
         }, 800); // Simulate network delay
        });
    }, []);

    const handleLoadMore = useCallback(async () => {
        if (hasMoreData && !isLoading) {
          dispatch(loadMoreItems());
          await simulateAsyncLoad();
          dispatch(loadMoreItemsSuccess());
        }
      }, [dispatch, hasMoreData, isLoading, simulateAsyncLoad]);

    // const handleLoadMoreSuccess = () => dispatch(loadMoreItemsSuccess());
    // const handleRefresh = () => dispatch(refreshItems());

      const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await simulateAsyncLoad();
    dispatch(refreshItems());
    setIsRefreshing(false);
  }, [dispatch, simulateAsyncLoad]);


    const handleSetItems = (items: MarketList[]) => dispatch(setItems(items))


    return {
        totalPages,
        displayedItems,
        isLoading,
        hasMoreData,
        currentPage,
        handleLoadMore,
        handleRefresh,
        handleSetItems,
        isRefreshing
    }
}

export default useMarketHistory;