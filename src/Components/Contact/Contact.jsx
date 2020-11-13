import React, { useState } from 'react';
import Particle from '../Header/HeaderMain/Particle';
import './Contact.css';
import emailjs from 'emailjs-com';
import ContactLink from './ContactLink';

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const handleSubmit = (e) =>{
    e.preventDefault();
    emailjs.sendForm('mehedi30313', 'template_t70m5mp', e.target, 'user_FBbxAs5F2iR78ILK22cF3')
    .then((result) => {
        if(result.text){
          setEmailSent(true);
        }
    })
    .catch((error) => {
        if(error.text){
          setEmailSent(false);
        }
    });
    e.target.reset();
  }
  return (
    <div id="contact" className="w-100">
      <br/><br/><br/>
      <h3 className='text-center font-weight-bold' data-aos="fade-down" >CONTACT</h3>
      <p className='text-center text-color font-weight-bold' data-aos="fade-up">Have a question or want to work together?</p>
      <div className="container-fluid px-4">
        <div id='contact-form' data-aos="zoom-out-up" className="mx-auto form-control w-50 shadow-lg p-4 rounded mt-3 contact-style">
          <h4 className='text-center font-weight-bold pb-4'>Get In Touched</h4>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group d-flex justify-content-center">
              <input type="text" className="form-control" name="name" autoComplete="off" id="exampleInputName" placeholder="Enter your name" required />
            </div>
            <div className="form-group d-flex justify-content-center">
              <input type="email" className="form-control" name="email" id="exampleInputEmail1" placeholder="Email" autoComplete="off" required />
            </div>
            <div className="form-group d-flex justify-content-center">
              <textarea className="form-control" name="message" rows="3" placeholder="Your Message" required></textarea>
            </div>
            <div className="form-group">
                <input type="submit" value="SUBMIT" className="btn btn-danger btn-outline-success text-light w-100"/>
            </div>
            {
              emailSent && <p className='text-warning text-center'>Your message has been sent successfully!!!</p>
            }
          </form>
        </div>
      </div> 
      <footer className="copyRight w-100 mt-3 text-center text-white" style={{zIndex: '10',position: "relative"}} data-aos="fade-up">
        <ContactLink/>
      </footer>
      
    </div>
  );
};

export default Contact;