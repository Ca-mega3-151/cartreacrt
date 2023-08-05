import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shoppingCart.slide";

const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
