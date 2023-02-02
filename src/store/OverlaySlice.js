import { createSlice } from "@reduxjs/toolkit";

const initialState = { visible: false };

const overlaySlice = createSlice({
  name: "overlay",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.visible = !state.visible;
    },
  },
});

export const overlayAction = overlaySlice.actions;
export default overlaySlice.reducer;
