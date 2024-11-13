// Contact.js
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';
import { MdOutlineMailOutline } from "react-icons/md";
import {
    AiFillGithub,
    AiOutlineWhatsApp,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, } from 'react-icons/fa';
import { FaLocationPin, } from 'react-icons/fa6';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAIL_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_PUBLIC_KEY
            )
            .then(
                (result) => {
                    toast.success('Message sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    toast.error('Failed to send the message. Please try again.');
                }
            )
            .finally(() => setLoading(false));
    };

    return (
        <div className="contact-container">
            <div className='box'>
                <h2 style={{ textAlign: 'center', padding: '20px' }}><MdOutlineMailOutline /> Having Something to say?</h2>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <input type="text" name="from_name" placeholder="Your Name" required />
                    <input type="email" name="from_email" placeholder="Your Email" required />
                    <input type="text" name="to_name" value="Muhammed Fayis P" hidden /> {/* Hidden input for the recipient's name */}
                    <input type="text" name="subject" placeholder="Subject" required />
                    <textarea name="message" placeholder="Your Message" required></textarea>
                    <button className='submit' type="submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
                <ToastContainer />
            </div>


            <div className="home-about-social">
                <h1>FIND ME ON</h1>
                <ul className="home-about-social-links">
                    <li className="social-icons">
                        <a
                            href="https://github.com/mhdfaaiz"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                            <AiFillGithub />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/muhammed-fayis-p"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://wa.me/+971565622404"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                            <AiOutlineWhatsApp />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://www.instagram.com/mhd.faaizz"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                        >
                            <AiFillInstagram />
                        </a>
                    </li>
                </ul>
                <br /><br />
                <div className='location-container'>
                    <FaLocationPin className='location-icon' />
                    <h2 className='location-text'>Dubai, United Arab Emirates</h2>
                </div>


            </div>

        </div>
    );
};

export default Contact;
