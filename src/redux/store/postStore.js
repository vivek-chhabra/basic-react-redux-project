import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "../slice/postSlice";

// store
const store = configureStore({
    reducer: postsReducer,
});

export default store;