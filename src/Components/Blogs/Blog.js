import React from 'react';

const Blog = ({blog}) => {
    return (
        <div className='col-md-4 col-6 card m-2 p-2 rounded text-info bg-light mb-4' data-aos={`${blog.id % 2 === 0 ? "zoom-out-right": "zoom-out-left"}`}>
            <a href={blog.link} target="_blank" rel="noopener noreferrer"><img src={blog.img} className="blog-img img-fluid" alt=""/></a>
            <a href={blog.link} className="py-2" target="_blank" rel="noopener noreferrer">SEE MORE</a>
        </div>
    );
};

export default Blog;