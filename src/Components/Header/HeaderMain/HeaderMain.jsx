import React from 'react';
import './HeaderMain.css';
import me from '../../../images/MMHK.jpg';
import resume from "../../../images/MMHK's RESUME.pdf"
import Typewriter from 'typewriter-effect';
import Particle from './Particle';

const HeaderMain = () => {
  return (
    <div id="home" style={{ height: '100vh', position: "relative", zIndex: '20' }} className='header-bg'>
      <header className="d-flex justify-content-center align-items-center">
        <div className="particle-section" data-aos="zoom-out-up" id="div">
          <img src={me} style={{ width: '20vw' }} className="img-fluid rounded" alt="MMHK"/>
          <h1 style={{ fontSize: '4vw' }}>Hello, I'm</h1>
          <h2 className='text-info'>Md. Mehedi Hasan Khan</h2>
          <h1 className="text-center text-warning"><span className="text-danger mr-2">I'm A</span>
          {/* "Muslim","Servant Of Allah","Follower of Prophet Muhammad (ﷺ)", */}
            <Typewriter
                options={{                  
                  strings: ["Full stack Web Developer",,"Web Designer","Learner"],
                  autoStart: true,
                  loop: true,
                }}
            />
          </h1>
        <a className="btn btn-outline-success text-white mt-2 mr-1" href="#contact">CONTACT ME &#10148;</a>
        <a className="btn btn-info mt-2 ml-1" href={resume} download="MMHK's RESUME">GET RESUME <strong>&#10515;</strong></a>
        </div>
      </header>
      <Particle particleParams={"headerMain"}/>
    </div>
  );
};

export default HeaderMain;