import { createSlice } from "@reduxjs/toolkit"

// UI Slice
export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    sidebarCollapsed: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed
    },
  },
})

export const { toggleSidebar, setSearchQuery } = uiSlice.actions

