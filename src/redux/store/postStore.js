import { createStore, applyMiddleware } from "redux";
import { postReducer } from "../reducers/postReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// store
const store = createStore(postReducer, applyMiddleware(thunk));

export default store;
