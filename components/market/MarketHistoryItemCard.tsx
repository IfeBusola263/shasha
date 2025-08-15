import { colors } from '@/constants/Colors';
import { MarketRun } from '@/types';
import { formatDate, getCompletionColor } from '@/utils/helpers';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';


const MarketHistoryItemCard = ({ 
  title, 
  createdAt, 
  items, 
  tags, 
  updatedAt,
  version,
  ownerId,
}: MarketRun) => {
  

  // Calculate completion percentage
  const completionRate = items?.length > 0 
    ? Math.round((items.filter(item => item.purchased).length / items.length) * 100)
    : 0;

    const handleViewMarketRun = () => {}


  return (
    <Pressable 
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed
      ]}
      onPress={handleViewMarketRun}
    >
      {/* Main Content */}
      <ThemedView style={styles.cardContent}>
        {/* Header */}
        <ThemedView style={styles.header}>
          <ThemedText type='subtitle' darkColor={colors.primaryWhite} style={styles.title} numberOfLines={1}>
            {title}
          </ThemedText>
          <ThemedView style={styles.itemCount}>
            <ThemedText style={styles.itemCountText}>
              {items?.length || 0}
            </ThemedText>
          </ThemedView>
        </ThemedView>

        {/* Date and Last Updated */}
        <ThemedView style={styles.dateContainer}>
          <ThemedText style={styles.createdDate}>
            Created {formatDate(createdAt)}
          </ThemedText>
          {updatedAt && updatedAt !== createdAt && (
            <ThemedText style={styles.updatedDate}>
              • Updated {formatDate(updatedAt)}
            </ThemedText>
          )}
        </ThemedView>

        {/* Progress Bar */}
        {items && items.length > 0 && (
          <ThemedView style={styles.progressContainer}>
            <ThemedView style={styles.progressBar}>
              <ThemedView 
                style={[
                  styles.progressFill, 
                  { 
                    width: `${completionRate}%`,
                    backgroundColor: getCompletionColor(completionRate)
                  }
                ]} 
              />
            </ThemedView>
            <ThemedText style={styles.progressText}>
              {completionRate}% complete
            </ThemedText>
          </ThemedView>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <ThemedView style={styles.tagsContainer}>
            {tags.slice(0, 3).map((tag, index) => (
              <ThemedView key={index} style={styles.tag}>
                <ThemedText style={styles.tagText}>
                  {tag}
                </ThemedText>
              </ThemedView>
            ))}
            {tags.length > 3 && (
              <ThemedView style={[styles.tag, styles.moreTag]}>
                <ThemedText style={styles.moreTagText}>
                  +{tags.length - 3}
                </ThemedText>
              </ThemedView>
            )}
          </ThemedView>
        )}

        {/* Footer with metadata */}
        <ThemedView style={styles.footer}>
          <ThemedView style={styles.footerLeft}>
            {items && items.length > 0 && (
              <ThemedText style={styles.itemsText}>
                {items.filter(item => item.purchased).length}/{items.length} items
              </ThemedText>
            )}
          </ThemedView>
          <ThemedView style={styles.footerRight}>
            {version && (
              <ThemedView style={styles.versionBadge}>
                <ThemedText style={styles.versionText}>
                  v{version}
                </ThemedText>
              </ThemedView>
            )}
          </ThemedView>
        </ThemedView>
      </ThemedView>

      {/* Accent Border */}
      <ThemedView 
        style={[
          styles.accentBorder, 
          { backgroundColor: getCompletionColor(completionRate) }
        ]} 
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    // backgroundColor: '#FFFFFF',
    borderRadius: 16,
    // marginHorizontal: 16,
    marginVertical: 6,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
    borderWidth: 0.5,
    // borderColor: '#F3F4F6',
    borderColor: colors.primary,
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
    shadowOpacity: 0.05,
    elevation: 2,
  },
  cardContent: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    // color: colors.primary,
  },
  itemCount: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginLeft: 12,
  },
  itemCountText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  createdDate: {
    fontSize: 14,
    color: '#6B7280',
  },
  updatedDate: {
    fontSize: 14,
    color: '#9CA3AF',
    marginLeft: 4,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
    marginLeft: 8,
    minWidth: 70,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  tag: {
    backgroundColor: '#EEF2FF',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 6,
    marginBottom: 4,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#3730A3',
  },
  moreTag: {
    backgroundColor: '#F3F4F6',
  },
  moreTagText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLeft: {
    flex: 1,
  },
  itemsText: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '500',
  },
  footerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  versionBadge: {
    backgroundColor: '#F9FAFB',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  versionText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#6B7280',
  },
  accentBorder: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
  },
});

export default MarketHistoryItemCard;