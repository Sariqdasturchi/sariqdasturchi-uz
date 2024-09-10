import React from 'react';
import { Button, message, Space } from 'antd';
import './contactMe.css';
import HeaderComponent from '../header/header';
import telegram from './telegram.png';
import instagram from './instagram.png';
import github from './github.png';
import linkedin from './linkedin.png';

const ContactMe = () => {
    const [result, setResult] = React.useState("");
    const [messageApi, contextHolder] = message.useMessage();



    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "c7f7a481-eb4a-4864-b29d-46b82742e95f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();

            messageApi.open({
                type: 'success',
                content: 'Xabaringiz yuborild',
            });

        } else {
            setResult(data.message);

        }
    };




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
                            <form onSubmit={onSubmit}>
                                <div>
                                    <input type="text" name='name' placeholder='Ism' required />
                                    <input type="email" name='email' placeholder='Email' required />
                                </div>
                                <div>
                                    <textarea name="message" id="message" placeholder='Xabar...' required></textarea>
                                </div>
                                <div>
                                    {contextHolder}
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
