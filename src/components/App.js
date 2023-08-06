import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header";
import About from "../components/About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  const {name, image, about, posts} = blogData

  return (
    <div className="App">
      
      <Header name={blogData.name}/>
      <About  image={blogData.image} text={blogData.about}/>
      <ArticleList posts={posts} />

    </div>
  );
}

export default App;
