import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header/Header';
import Project from '../Project/Project';
// import AllProjects from '../AllProjects/AllProjects';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <>
            <Router>
            <Header/>
                <About/>
                <Home/>
                <Project/>
                <Blogs/>
                <Contact/>
            </Router>
        </>
    );
};

export default Home;