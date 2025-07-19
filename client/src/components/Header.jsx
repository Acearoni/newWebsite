import { NavLink } from 'react-router-dom';
import '../css/header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav-bar">
                <NavLink to="/local" className={({ isActive }) => isActive ? "nav-link active-tab" : "nav-link"}>
                    LOCAL
                </NavLink>
                <NavLink to="/personal" className={({ isActive }) => isActive ? "nav-link active-tab" : "nav-link"}>
                    PERSONAL
                </NavLink>
                <h1 className="title">
                    <NavLink to="/" className="home-render">OOZE TO ME</NavLink>
                </h1>
                <NavLink to="/gaming" className={({ isActive }) => isActive ? "nav-link active-tab" : "nav-link"}>
                    GAMING
                </NavLink>
                <NavLink to="/socials" className={({ isActive }) => isActive ? "nav-link active-tab" : "nav-link"}>
                    SOCIALS
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
