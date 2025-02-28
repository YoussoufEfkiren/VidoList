// Format view count for display
export const formatViews = (likes) => {
    if (likes >= 1000) {
      return `${(likes / 1000).toFixed(1)}K`
    }
    return likes.toString()
  }
  
  