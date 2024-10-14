import logo from './sariqdasturchi.png';
import './header.css'
import { Link } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import { CiDark } from "react-icons/ci";
import { useEffect, useState } from 'react';
import { MdEmail } from "react-icons/md";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function HeaderComponent() {

    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('dark-mode');
        return savedMode === 'true';
    })
    const [menuBtn, setMenuBtn] = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const darkModeOnchange = () => {
        setDarkMode((prevdarkMode) => {
            const newMode = !prevdarkMode;
            localStorage.setItem('dark-mode', newMode);
            return newMode;
        })
    }
    useEffect(() => {
        document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    }, [darkMode]);

    const menuBtnOnchange = () => {
        setMenuBtn(prevMenu => !prevMenu)
    }
    return (
        <>
            <header data-theme={darkMode ? 'dark' : 'light'}>
                <nav>
                    <div className="logo">
                        <a href="/">
                            <span><img src={logo} alt="Sariqdastuchi-logo" /></span>
                            <h1>Sariqdasturchi</h1>
                        </a>
                    </div>
                    <div className="menu-list">
                        <ul>
                            <li><Link to={'/'}>Bosh sahifa</Link></li>
                            <li><Link to={'/course'}>Barcha kurslar</Link></li>
                            <li><Link to={'/'}>Loyihalar</Link></li>
                            <li><Link to={'/contact-me'}>Bog'lanish</Link></li>
                        </ul>
                    </div>

                    <div className='header-right'>
                        <div className="dark-mode">
                            {darkMode ? <button onClick={darkModeOnchange}><CiDark /></button>
                                : <button onClick={darkModeOnchange}><IoMdSunny /></button>
                            }
                        </div>
                        <div className='message-link'>
                            <Link to={'/contact-me'}><MdEmail /></Link>
                        </div>
                        <div className="login-page">
                            <Link to={'/login'}>
                                <button>Kirish</button>
                            </Link>
                        </div>
                    </div>
                    <div className="menu">
                        {
                            menuBtn ? <button onClick={handleShow}><IoMdClose /></button>
                                :
                                <button onClick={handleShow}><CiMenuFries /></button>
                        }
                    </div>

                    <div className="user-page"></div>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </nav>
            </header>
        </>
    )
}

export default HeaderComponent