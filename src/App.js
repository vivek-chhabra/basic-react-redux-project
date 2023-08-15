import { fetchPostsRequest } from "./redux/reducers/postReducers";
import { searchPost } from "./redux/actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
    // state
    const [input, setInput] = useState("");

    // dispatch
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPostsRequest());
    }, []);

    // getting data from the store
    const state = useSelector((data) => data);
    const { isPending, error, posts, post } = state;

    // handle search
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searchPost(+input));
        console.log(state);
    };

    return (
        <div className="App">
            <div className="header">
                <h1>React Redux Project</h1>
                <p>This project is a simple react redux porject that fatches data with search functionality from an API</p>
                <form action="" onSubmit={handleSearch}>
                    <input type="text" name="" id="" onChange={(e) => setInput(e.target.value)} placeholder="Search For a Post" />
                    <button className="btn">Search</button>
                </form>
            </div>
            <div className="main-content">
                {error !== null && error !== undefined && (
                    <div class="alert alert-danger alert-dismissible fade show" style={{ display: "flex", justifyContent: "space-between" }} role="alert">
                        <div>
                            <strong style={{ marginRight: "10px" }}>Oops!</strong>
                            {error}
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                )}
                {isPending ? (
                    <div class="spinner-border text-primary" style={{ marginInline: "auto" }} role="status">
                        <span class="visually-hidden"></span>
                    </div>
                ) : post.length > 0 ? (
                    post.map((ele) => (
                        <>
                            <h1>Total Posts : {post.length} </h1>
                            <div className="posts">
                                <div className="post">
                                    <div className="title">{ele.title}</div>
                                    <div className="content">{ele.body}</div>
                                </div>
                            </div>
                        </>
                    ))
                ) : (
                    <>
                        <h1>Total Posts : {posts.length} </h1>
                        {posts.map((post) => (
                            <>
                                <div className="posts">
                                    <div className="post">
                                        <div className="title">{post.title}</div>
                                        <div className="content">{post.body}</div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
