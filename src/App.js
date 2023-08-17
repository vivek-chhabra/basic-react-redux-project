import { useDispatch, useSelector } from "react-redux";
import { fetchPost, fetchRequest } from "./redux/slice/postSlice";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
    // state
    const [input, setInput] = useState("");

    // dispatch
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRequest());
    }, []);

    // useSelector
    let state = useSelector((data) => data);
    const { isPending, error, posts, post } = state;

    // handling search
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(fetchPost(+input));
    };
    return (
        <div className="App">
            <div className="header">
                <h1>React Redux Project</h1>
                <p>This project is a simple react redux porject that fatches data with search functionality from an API</p>
                <form action="" onSubmit={handleSearch}>
                    <input type="text" name="" id="" placeholder="Search For a Post" onChange={(e) => setInput(e.target.value)} />
                    <button className="btn">Search</button>
                </form>
            </div>
            <div className="main-content">
                {error !== null && (
                    <div class="alert alert-danger alert-dismissible fade show" style={{ display: "flex", justifyContent: "space-between" }} role="alert">
                        <div>
                            <strong style={{ marginRight: "10px" }}>Oops!</strong>
                            {error}
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                )}
                {isPending ? (
                    <div className="spinner-border text-primary" style={{ marginInline: "auto" }} role="Close">
                        <span className="visually-hidden"></span>
                    </div>
                ) : post.length > 0 ? (
                    post.map((ele) => (
                        <>
                            <h1>Total Posts : {post.length}</h1>
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
                        <h1>Total Posts : {posts.length}</h1>
                        {posts.map((post) => (
                            <div className="posts" key={crypto.randomUUID()}>
                                <div className="post">
                                    <div className="title">{post.title}</div>
                                    <div className="content">{post.body}</div>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
