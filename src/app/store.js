import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./slice/CreateSlice";

export const store = configureStore({
  reducer: {
    store: storeSlice.reducer,
    devTools: process.env.NODE_ENV !== 'production',
  },
});
