import React, { useState } from 'react';
import '../css/footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <p>© 2025 My Blog — All Rights Reserved</p>
            <div className='social-links'>
                <a href="https://twitter.com/Acearoni" target="_blank" rel="noopener noreferrer">
                    TWITTER
                </a>
                <a href="https://twitch.tv/Acearoni" target="_blank" rel="noopener noreferrer">
                    TWITCH
                </a>
                <a href="https://github.com/Acearoni" target="_blank" rel="noopener noreferrer">
                    GITHUB
                </a>
                <a href="https://youtube.com/@Acearonii" target="_blank" rel="noopener noreferrer">
                    YOUTUBE
                </a>
            </div>
        </footer>
    );
}

export default Footer;