// Format date for display
  export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return 'Today';
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
      });
    }
  };

  // Get completion color
    export const getCompletionColor = (rate: number) => {
      if (rate === 100) return '#10B981'; // Green
      if (rate >= 75) return '#F59E0B'; // Amber
      if (rate >= 50) return '#3B82F6'; // Blue
      if (rate >= 25) return '#8B5CF6'; // Purple
      return '#6B7280'; // Gray
    };