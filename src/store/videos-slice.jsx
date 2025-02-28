import { createSlice } from "@reduxjs/toolkit"
import { allVideos, playlists } from "../data/sample-data"

// Videos Slice
export const videosSlice = createSlice({
  name: "videos",
  initialState: {
    allVideos,
    playlists,
    currentPlaylist: null,
    selectedVideo: null,
    videoInteractions: allVideos.reduce((acc, video) => {
      acc[video.id] = {
        likes: video.likes,
        dislikes: video.dislikes,
        comments: [...video.commentaires],
        userLiked: false,
        userDisliked: false,
      }
      return acc
    }, {}),
  },
  reducers: {
    selectPlaylist: (state, action) => {
      state.currentPlaylist = action.payload
      state.selectedVideo = null
    },
    showAllVideos: (state) => {
      state.currentPlaylist = null
      state.selectedVideo = null
    },
    selectVideo: (state, action) => {
      state.selectedVideo = action.payload
      // Reset user interaction state for this video
      if (state.videoInteractions[action.payload.id]) {
        state.videoInteractions[action.payload.id].userLiked = false
        state.videoInteractions[action.payload.id].userDisliked = false
      }
    },
    likeVideo: (state, action) => {
      const videoId = action.payload
      const interaction = state.videoInteractions[videoId]

      if (interaction.userLiked) {
        // Unlike
        interaction.likes -= 1
        interaction.userLiked = false
      } else {
        // Like
        interaction.likes += 1
        interaction.userLiked = true

        // If was disliked before, remove dislike
        if (interaction.userDisliked) {
          interaction.dislikes -= 1
          interaction.userDisliked = false
        }
      }
    },
    dislikeVideo: (state, action) => {
      const videoId = action.payload
      const interaction = state.videoInteractions[videoId]

      if (interaction.userDisliked) {
        // Remove dislike
        interaction.dislikes -= 1
        interaction.userDisliked = false
      } else {
        // Dislike
        interaction.dislikes += 1
        interaction.userDisliked = true

        // If was liked before, remove like
        if (interaction.userLiked) {
          interaction.likes -= 1
          interaction.userLiked = false
        }
      }
    },
    addComment: (state, action) => {
      const { videoId, comment } = action.payload
      state.videoInteractions[videoId].comments.push(comment)
    },
  },
})

export const { selectPlaylist, showAllVideos, selectVideo, likeVideo, dislikeVideo, addComment } = videosSlice.actions

