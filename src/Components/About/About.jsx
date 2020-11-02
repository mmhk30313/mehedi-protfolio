import React from 'react';
import './About.css'
import me from '../../images/imgMMHK2.png'

const About = () => {
  return (
    <div id="about" className=''>
      <br/><br/>
      <h1 className="text-center text-muted mt-5" data-aos="fade-in">ABOUT <span className='text-danger'>ME</span></h1>
      <div className="row w-100 mx-auto justify-content-center mt-3">
        <div className="col-md-4 justify-content-center text-center" data-aos="zoom-out-right">
          <img className="rounded w-75 rounded-circle img-fluid" src={me} alt="" /> 
        </div>
        <p className='col-md-4 mt-4 text-justify' data-aos="zoom-out-left"><strong className='text-info'>Passionate web app developer.</strong> Always try to grab the new features of technology. Last few years made myself skilled in the field of web application development. Acquired to maintain strong interpersonal relationships with teammates. I am passionate about providing care to my work, which keeps me motivated and excited about doing my best work</p>
      </div>
      <div className="row w-100 mx-auto container justify-content-center p-3">
          <div className="col-md-6 w-100 mx-auto justify-content-center" data-aos="zoom-in-left">
            <h3 className="pb-2">PROFILE</h3>
            <h5>Name:</h5>
            <p>Md. Mehedi Hasan Khan</p>
            <h5>Education:</h5>
            <p className="font-weight-bold mb-0">B.Sc. Eng. (Computer Science and Engineering)</p>
              <p>Mawlana Bhashani Science & Technology University</p>
              <h5>Location:</h5>
              <p>Gulshan Lake View, Dhaka-1212, Bangladesh</p>
              <h5>Nationality:</h5>
              <p>Bangladeshi</p>
          </div>
          <div className="col-md-4 col-sm-12" data-aos="zoom-in-right">
            <h3 className="">My Skills Set</h3>
            <div className="technology mb-5">
              <span>JavaScript</span><span>ES6</span><span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>Redux.js</span><span>Material UI</span><span>Git</span><span>Heroku</span><span>Netlify</span><span>NPM</span><span>VS Code</span><span>REST API</span><span>Firebase</span>
            </div>
            <h3 >I want to work with</h3>
            <div className="technology mb-5">
              <span>JavaScript</span><span>React.js</span><span>REST API</span><span>C/C++</span><span>Java</span>
            </div>
            <h3>I prefer not to work with</h3>
            <div className="technology">
              <span>PHP</span><span>Laravel</span><span>MySQL</span><span>Wordpress</span><span>jQuery</span></div>
            </div>
          </div>
    </div> 
  );
};

export default About;
