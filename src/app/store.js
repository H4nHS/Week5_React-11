import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./slice/CreateSlice";
import commentSlice from "./slice/CommentSlice";

export const store = configureStore({
  reducer: {
    store: storeSlice.reducer,
    comment: commentSlice.reducer,
  },
});
