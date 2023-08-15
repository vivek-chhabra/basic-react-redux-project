import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="header">
                <h1>React Redux Project</h1>
                <p>This project is a simple react redux porject that fatches data with search functionality from an API</p>
                <form action="">
                    <input type="text" name="" id="" placeholder='Search For a Post' />
                    <button className="btn">Search</button>
                </form>
            </div>
            <div className="main-content">
              <h1>Total Posts : {'100'}</h1>
              <div className="posts">
                <div className="post">
                  <div className="title">Post Title</div>
                  <div className="content">Content</div>
                </div>
              </div>
            </div>
        </div>
    );
}

export default App;
