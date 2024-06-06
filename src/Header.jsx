import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Joshua Fenlason</Link>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;