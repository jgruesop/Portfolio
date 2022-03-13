import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_z3ul5ia', 'template_958hp1u', form.current, 'edoLLevRDE8jFl1Po');
    e.target.reset(); //Resetea las cajas de texto del formulario
    alert('Message Send Successfully');
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container container__contact">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jhonper86@gmail.com</h5>
            <a href="mailto:jhonper86@gmail.com" rel='noreferrer' target="_blank">Send a Message</a>
          </article>  

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+57 316 5612899</h5>
            <a href="https://wa.me/573165612899?text=Do%20I%20help%20please?" rel='noreferrer' target="_blank">Send a Message</a>
          </article> 
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea> 
          <button type='submit' className='btn btn-primary'>Send Message</button> 
        </form>
      </div>
    </section>
  )
}

export default Contact