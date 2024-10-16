import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/my-team">My Team</a>
        <a href="/leagues">Leagues</a>
        <a href="/how-to-play">How to Play</a>
        <a href="/account">Account</a>
      </div>

      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Formula 1 Fantasy League. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
