import logo from './sariqdasturchi.png';
import './header.css'
import { Link } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useState } from 'react';

function HeaderComponent() {

    const [darkMode, setDarkMode] = useState(false)
    const [menuBtn, setMenuBtn] = useState(false)

    const darkModeOnchange = () => {
        setDarkMode(prevdarkMode => !prevdarkMode)
    }

    const menuBtnOnchange = () => {
        setMenuBtn(prevMenu => !prevMenu)
    }
    return (
        <>
            <header>
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
                        {darkMode ? <button onClick={darkModeOnchange}><MdDarkMode /></button>
                            : <button onClick={darkModeOnchange}><CiDark /></button>
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