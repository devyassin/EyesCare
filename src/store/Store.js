import { configureStore } from "@reduxjs/toolkit";
import OverlaySlice from "./OverlaySlice";
import LoginSlice from "./LoginSlice";


const store = configureStore({
  reducer: { overlay: OverlaySlice, login: LoginSlice },
});

export default store;
