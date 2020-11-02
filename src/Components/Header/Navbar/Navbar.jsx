import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Navbar.css';

const MyBar = () => {
    return (
    <nav id="myNav" className="sticky-top bg-special">
            <Navbar bg="transparent" className='container' expand="lg">
                <Navbar.Brand className="id-brand text-fluid"><span className='big-name'>Md. Mehedi Hasan Khan</span><span className='small-name'>MMHK</span></Navbar.Brand>
                <Navbar.Toggle className='bg-info' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="mr-3 nav-link" exact="true"  href="#home" >Home</Nav.Link>
                        <Nav.Link className="mr-3 nav-link" exact="true"  href="#about" >About</Nav.Link>
                        <Nav.Link className="mr-3 nav-link" exact="true"  href="#projects" >Projects</Nav.Link>
                        <Nav.Link className="mr-3 nav-link" exact="true"  href="#blog" >Blog</Nav.Link>
                        <Nav.Link className="nav-link" exact="true"  href="#contact" >Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </nav>
  );
};

export default MyBar;