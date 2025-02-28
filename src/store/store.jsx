import { configureStore } from "@reduxjs/toolkit"
import { uiSlice } from "./ui-slice"
import { videosSlice } from "./videos-slice"

// Create store
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    videos: videosSlice.reducer,
  },
})

export default store

