import { Link } from 'react-router-dom';
import '../css/header.css'

const Header = () => {
    return (
        <header className="header">
            <nav className="nav-bar">
                <div className="nav-link"><Link to="/local">LOCAL</Link></div>
                <div className="nav-link"><Link to="/personal">PERSONAL</Link></div>
                <h1 className="title"><Link to="/">THE BLOG</Link></h1>
                <div className="nav-link"><Link to="/gaming">GAMING</Link></div>
                <div className="nav-link"><Link to="/socials">SOCIALS</Link></div>
            </nav>
        </header>
    );
};

export default Header;
