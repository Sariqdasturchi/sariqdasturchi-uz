import logo from './sariqdasturchi.png';
import './header.css'
import { Link } from 'react-router-dom';

function HeaderComponent() {
    return(
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
                    <Link to={'/login'}>Kirish</Link>
                </div>
                <div className="user-page"></div>
            </nav>
         </header>
        </>
    )
}

export default HeaderComponent