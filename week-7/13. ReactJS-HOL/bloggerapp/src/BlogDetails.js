import React from "react";

function BlogDetails({ blogs }) {
  return (
    <div className="section">
      <h1>Blog Details</h1>
      {blogs.length === 0 ? (
        <p>No blogs available</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <h4>{blog.author}</h4>
            <p>{blog.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default BlogDetails;
