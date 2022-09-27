import { useState, useEffect } from "react";
import useFetch from "../Hooks/UseFetch";
import BlogList from "./BlogList";


const Home = () => {
 
  // const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };

  const { data: blogs,isPending,error} = useFetch('http://localhost:8000/blogs')

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
