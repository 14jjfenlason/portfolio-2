import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/14jjfenlason/" target="_blank" rel="noopener noreferrer">
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Joshua Fenlason. All rights reserved.</p>
    </footer>
  );
}

export default Footer;