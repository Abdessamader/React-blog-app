import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "../Hooks/UseFetch";

function BlogDetails() {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();
  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
        method: "DELETE"
        }).then(()=>{
            history.push('/')
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
