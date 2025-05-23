import { Link } from 'react-router-dom';
import '../css/header.css'

const Header = () => {
    return (
        <header className="header">
            <nav className="nav-bar">
                <div className="nav-link"><Link to="/local">Local</Link></div>
                <div className="nav-link"><Link to="/personal">Personal</Link></div>
                <h1 className="title">My Blog</h1>
                <div className="nav-link"><Link to="/gaming">Gaming</Link></div>
                <div className="nav-link"><Link to="/socials">Socials</Link></div>
            </nav>
        </header>
    );
};

export default Header;
