import React from 'react';
import './Blog.css';

function Blog() {
  return (
    <div className="blog">
      <div className="blog-post">
        <img src="https://placekitten.com/640/360" alt="Blog Post" />
        <h2>Blog Post Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt aliquet felis. </p>
        <a href="#" className="read-more">Read More</a>
      </div>
      <div className="blog-post">
        <img src="https://placekitten.com/640/360" alt="Blog Post" />
        <h2>Blog Post Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt aliquet felis. </p>
        <a href="#" className="read-more">Read More</a>
      </div>
      <div className="blog-post">
        <img src="https://placekitten.com/640/360" alt="Blog Post" />
        <h2>Blog Post Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt aliquet felis. </p>
        <a href="#" className="read-more">Read More</a>
      </div>
    </div>
  );
}

export default Blog;