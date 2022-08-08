import { configureStore } from "@reduxjs/toolkit";
import { storeSlice } from "./slice/CreateSlice";
import saves from "./slice/CreateSlice";

export const store = configureStore({
  reducer: {
    store: storeSlice.reducer,
  },
});
