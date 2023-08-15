// action types
const FETCH_POSTS = "FETCH_POSTS";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILURE = "FETCH_FAILURE";
const SEARCH_POST = "SEARCH_POST";

// aciton creators
const fetchPosts = () => {
    return {
        type: FETCH_POSTS,
    };
};

const searchPost = (id) => {
    return {
        type: SEARCH_POST,
        payload: id,
    };
};

const fetchSuccess = (state) => {
    return {
        type: FETCH_SUCCESS,
        payload: state,
    };
};

const fetchFailure = (errorMsg) => {
    return {
        type: FETCH_FAILURE,
        payload: errorMsg,
    };
};

export { FETCH_POSTS, FETCH_SUCCESS, FETCH_FAILURE, SEARCH_POST, searchPost, fetchPosts, fetchSuccess, fetchFailure };
