import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>My Blog</h1>
            <nav>
                <Link to="/local">Local</Link>
                <Link to="/personal">Personal</Link>
                <Link to="/gaming">Gaming</Link>
                <Link to="/socials">Socials</Link>
            </nav>
        </header>
    );
};

export default Header;
