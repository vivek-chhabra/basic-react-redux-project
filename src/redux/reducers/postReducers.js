import { FETCH_POSTS, SEARCH_POST, FETCH_SUCCESS, FETCH_FAILURE, fetchSuccess, fetchFailure, fetchPosts, searchPost } from "../actions/postActions";
import axios from "axios";

// initial state
const initialState = {
    isPending: false,
    error: null,
    posts: [],
    post: [],
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, isPending: true, error: null };
            break;
        case SEARCH_POST:
            return { ...state, error: null, post: state.posts.filter((post) => post.id === action.payload) };
            break;
        case FETCH_SUCCESS:
            return { ...state, isPending: false, error: null, posts: action.payload.data };
            break;
        case FETCH_FAILURE:
            return { ...state, isPending: false, error: action.payload };
            break;
        default:
            return state;
    }
};

// async aciton creator
const fetchPostsRequest = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchPosts());
            let data = await axios("https://jsonplaceholder.typicode.com/posts");
            dispatch(fetchSuccess(data));
        } catch (err) {
            console.log(err.message);
            dispatch(fetchFailure(err.message));
        }
    };
};

export { fetchPostsRequest };
