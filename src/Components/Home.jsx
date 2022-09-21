import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null)
  // const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          console.log(res);
          if(!res.ok) {
              throw Error('Could not fetch the data !!!')
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null)
        })
        .catch((err)=>{
          setIsPending(false)
          setError(err.message)
        })
    }, 1000);
  }, []);

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
