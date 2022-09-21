import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
 
  // const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };

  

  return (
    <div className="home">
      { error && <div> { error } </div> }
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="all blogs" />}
      {/* <BlogList blogs = { blogs.filter((blog)=>blog.author==="yoshi" ) } title = "Yagami's  Blogs"/> */}
    </div>
  );
};

export default Home;
