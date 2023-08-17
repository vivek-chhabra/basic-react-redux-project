import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import store from "../store/postStore";

// initial state
const initialState = {
    isPending: false,
    error: null,
    posts: [],
    post: [],
};

// createAsyncThunk
const fetchRequest = createAsyncThunk("posts/fetchRequest", async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/posts");
    return res.data;
});

// create slice
const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        fetchPost: (state, action) => {
            state.post = state.posts.filter((post) => post.id === action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRequest.pending, (state) => {
            state.isPending = true;
            state.error = null;
        });
        builder.addCase(fetchRequest.fulfilled, (state, action) => {
            state.isPending = false;
            state.posts = action.payload;
        });
        builder.addCase(fetchRequest.rejected, (state, action) => {
            state.isPending = false;
            state.error = action.error.message;
            state.posts = [];
        });
    },
});

// action
export const { fetchPost } = postSlice.actions;

// reducer
export const postsReducer = postSlice.reducer;

export { fetchRequest };
