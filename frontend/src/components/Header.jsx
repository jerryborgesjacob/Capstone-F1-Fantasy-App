import { Link } from 'react-router-dom';
import logo from '../assets/f1-logos.png';
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href='/'><img src={logo} alt='logo of formula 1'></img></a>
      </div>
      
      <nav>
        <ul className="nav-links">
          <li><Link to="/myteam">My Team</Link></li>
          <li><Link to="/leagues">Leagues</Link></li>
          <li><Link to="/howtoplay">How to Play</Link></li>
          <li><Link to="/racedata">Standings</Link></li>
          <li><Link to="/account">Account</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
