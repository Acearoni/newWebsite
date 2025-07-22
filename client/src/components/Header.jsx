import { NavLink } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import '../css/header.css';

const Header = () => {
    const token = localStorage.getItem('token');

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
                    <NavLink to="/" className="nav-link">THE BLOG</NavLink>
                </h1>
                <NavLink to="/gaming" className={({ isActive }) => isActive ? "nav-link active-tab" : "nav-link"}>
                    GAMING
                </NavLink>
                <NavLink to="/socials" className={({ isActive }) => isActive ? "nav-link active-tab" : "nav-link"}>
                    SOCIAL
                </NavLink>

                {token && <LogoutButton />}
            </nav>
        </header>
    );
};

export default Header;


