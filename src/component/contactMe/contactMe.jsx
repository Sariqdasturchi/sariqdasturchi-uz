import React from 'react';
import './contactMe.css';
import HeaderComponent from '../header/header';
import telegram from './telegram.png';
import instagram from './instagram.png';
import github from './github.png';
import linkedin from './linkedin.png';

const ContactMe = () => {
    return (
        <div className='contcat-me-section'>

            <div className="contact-me-container">
                <div className="contact-title">
                    <h1>Bog'lanish</h1>
                </div>
                <div className='contact-block'>
                    <div className="user-contact">
                        <div className="user-image"></div>
                        <div className="user-desc">
                            <h1>Suhrob Bozorov</h1>
                            <p>Front-end dasturchi</p>
                        </div>
                        <div className="user-message">
                            <a href="https://t.me/suhrobcode">
                                <span><img src={telegram} alt="user-message" /></span>
                                Telegram
                            </a>
                            <a href="https://www.instagram.com/sariqdasturchi/">
                                <span><img src={instagram} alt="user-message" /></span>
                                Instagram
                            </a>
                            <a href="https://github.com/Sariqdasturchi">
                                <span><img src={github} alt="user-message" /></span>
                                Git-Hub
                            </a>
                            <a href="https://www.linkedin.com/in/sukhrob-bozorov-45b83023b/">
                                <span><img src={linkedin} alt="user-message" /></span>
                                Linkedin
                            </a>
                        </div>
                    </div>
                    <div className="user-about">
                        <div className="user-about-form">
                            <form>
                                <div>
                                    <input type="text" name='name' placeholder='Ism' required />
                                    <input type="email" name='email' placeholder='Email' required />
                                </div>
                                <div>
                                    <textarea name="message" id="message" placeholder='Xabar...' required></textarea>
                                </div>
                                <div>
                                    <button type='submit'>Yuborish</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <HeaderComponent />
        </div>
    );
}

export default ContactMe;
