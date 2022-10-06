import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../Hooks/UseFetch";

function BlogDetails() {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();
  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
        method: "DELETE"
        }).then(()=>{
            navigate('/')
        })
  };
  return (
    <div className="blog-details">
      <h2>Blog Details - {id} </h2>
      {isPending && <h3>Loading...</h3>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
