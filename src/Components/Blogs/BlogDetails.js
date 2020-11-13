import React from 'react';
import './Blogs.css';
import img1 from './blog1.PNG';
import img2 from './blog2.PNG';
import img3 from './blog3.PNG';
import img4 from './blog4.PNG';
import Blog from './Blog';
import Carousel from 'react-bootstrap/Carousel'
const blogs = [
    {
        id: 1,
        img: img1,
        link: 'https://mmhk-mmhkitsforyou.medium.com/javascript-for-beginning-moment-8cafa16497ca'
    },
    {
        id: 2,
        img: img2,
        link: 'https://mmhk-mmhkitsforyou.medium.com/some-special-topics-of-javascript-c836efdbde5'
    },
    {
        id: 3,
        img: img3,
        link: 'https://mmhk-mmhkitsforyou.medium.com/working-on-some-functions-in-javascript-es6-db87eb1744e8'
    },
    {
        id: 4,
        img: img4,
        link: 'https://mmhk-mmhkitsforyou.medium.com/react-js-6e802574c7ff'
    },
]
const BlogDetails = () => {
    return (
        <div id="blog" className='text-center w-100'>
            <br/>
            <h1 className='text-light my-5' data-aos='zoom-in-up'>BLOGS</h1>
            <div className="container row w-100 justify-content-center mx-auto mt-5">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}/>)
                }
            </div>
        </div>
    );
};

export default BlogDetails;