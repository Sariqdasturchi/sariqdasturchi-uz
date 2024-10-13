import logo from './sariqdasturchi.png';
import './header.css'
import { Link } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import { CiDark } from "react-icons/ci";
import { useEffect, useState } from 'react';

function HeaderComponent() {

    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('dark-mode');
        return savedMode === 'true';
    })
    const [menuBtn, setMenuBtn] = useState(false)

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
                    <div className="login-page">
                        <Link to={'/login'}>
                            <button>Kirish</button>
                        </Link>
                    </div>
                    <div className="dark-mode">
                        {darkMode ? <button onClick={darkModeOnchange}><CiDark /></button>
                            : <button onClick={darkModeOnchange}><IoMdSunny /></button>
                        }
                    </div>
                    <div className="menu">
                        {
                            menuBtn ? <button onClick={menuBtnOnchange}><IoMdClose /></button>
                                :
                                <button onClick={menuBtnOnchange}><CiMenuFries /></button>
                        }
                    </div>
                    <div className="user-page"></div>
                    {
                        menuBtn ?
                            <div className="mobile-menu-list">
                                <ul>
                                    <li><Link to={'/'}>Bosh sahifa</Link></li>
                                    <li><Link to={'/course'}>Barcha kurslar</Link></li>
                                    <li><Link to={'/'}>Loyihalar</Link></li>
                                    <li><Link to={'/contact-me'}>Bog'lanish</Link></li>
                                    <div className="mobile-login-page">
                                        <Link to={'/login'}>
                                            <button>Kirish</button>
                                        </Link>
                                    </div>
                                </ul>
                            </div>
                            : null
                    }
                </nav>
            </header>
        </>
    )
}

export default HeaderComponent