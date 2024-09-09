import logo from './sariqdasturchi.png';
import './header.css'

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
                        <li><a href="#">Bosh sahifa</a></li>
                        <li><a href="#">Barcha kurslar</a></li>
                        <li><a href="#">Loyihalar</a></li>
                        <li><a href="#">Bog'lanish</a></li>
                    </ul>
                </div>
                <div className="login-page">
                    <button>Kirish</button>
                </div>
                <div className="user-page"></div>
            </nav>
         </header>
        </>
    )
}

export default HeaderComponent