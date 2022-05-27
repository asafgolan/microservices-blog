import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
    return <div className="container">
        <h1>Post create!!!!</h1>
        <PostCreate/>
        <hr/>
        <h1>Post list</h1>
        <PostList/>
    </div>;
};

export default App;
