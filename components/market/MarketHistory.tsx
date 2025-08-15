import { type MarketRun } from "@/types";
import React, { useCallback } from 'react';
import { ActivityIndicator, RefreshControl, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ThemedText } from '../ThemedText';
import MarketHistoryItemCard from "./MarketHistoryItemCard";

import useMarketHistory from '@/hooks/useMarketHistory';
import { ThemedView } from '../ThemedView';

const MarketHistory = () => {
  const {
    totalPages,
    displayedItems,
    isLoading,
    hasMoreData,
    currentPage,
    handleLoadMore,
    handleRefresh,
    isRefreshing
  } = useMarketHistory();
  
  // Render item
  const renderItem = useCallback(({ item }: { item: MarketRun }) => (
    <MarketHistoryItemCard 
      {...item} 
    />
  ), []);

  // Render footer with loading indicator and pagination info
  const renderFooter = useCallback(() => {
    if (!hasMoreData && displayedItems.length > 0) {
      return (
        <ThemedView style={styles.footerContainer}>
          <ThemedView style={styles.endMessage}>
            <ThemedText style={styles.endMessageText}>
              {"You've reached the end"}
            </ThemedText>
            <ThemedText style={styles.paginationInfo}>
              Showing {displayedItems.length} of {displayedItems.length} items
            </ThemedText>
          </ThemedView>
        </ThemedView>
      );
    }

    if (isLoading) {
      return (
        <ThemedView style={styles.footerContainer}>
          <ActivityIndicator size="large" color="#6d858a" />
          <ThemedText style={styles.loadingText}>
            Loading more items...
          </ThemedText>
          <ThemedText style={styles.paginationInfo}>
            Page {currentPage} of {totalPages}
          </ThemedText>
        </ThemedView>
      );
    }

    if (hasMoreData) {
      return (
        <ThemedView style={styles.footerContainer}>
          <ThemedText style={styles.paginationInfo}>
            Page {currentPage} of {totalPages} • Tap to load more
          </ThemedText>
        </ThemedView>
      );
    }

    return null;
  }, [hasMoreData, isLoading, displayedItems.length, currentPage, totalPages]);

  // Render empty state
  const renderEmpty = useCallback(() => (
    <ThemedView style={styles.emptyContainer}>
      <ThemedText style={styles.emptyTitle}>No Market Lists</ThemedText>
      <ThemedText style={styles.emptySubtitle}>
        Your shopping history will appear here
      </ThemedText>
    </ThemedView>
  ), []);

  // Item separator
  const ItemSeparator = useCallback(() => <ThemedView style={styles.separator} />, []);

  return (

      <FlatList
        data={displayedItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={ItemSeparator}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={['#6d858a']}
            tintColor="#6d858a"
          />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        // Performance optimizations
        removeClippedSubviews={true}
        maxToRenderPerBatch={7}
        windowSize={10}
        initialNumToRender={7}
        getItemLayout={(data, index) => ({
          length: 120, // Approximate item height
          offset: 120 * index,
          index,
        })}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  contentContainer: {
    paddingVertical: 8,
    flexGrow: 1,
  },
  separator: {
    height: 1,
    backgroundColor: 'transparent',
  },
  footerContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 8,
    fontSize: 14,
    color: '#6B7280',
  },
  paginationInfo: {
    marginTop: 4,
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  endMessage: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  endMessageText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
});

export default MarketHistory;



// import { type MarketRun } from "@/types";
// import { dummyMarketLists } from "@/utils/dummyList";
// import { FlatList } from "react-native-gesture-handler";
// import MarketHistoryItemCard from "./MarketHistoryItemCard";

// const renderItem = ({ item }: {item: MarketRun}) => <MarketHistoryItemCard {...item} />


// const MarketHistory = () => {
//     return (
//         <FlatList
//             data={dummyMarketLists}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.id}
//         />
//     )
// }

// export default MarketHistory;