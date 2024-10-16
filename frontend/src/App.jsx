import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/Home';
import MyTeam from './pages/MyTeam';
import Leagues from './pages/Leagues';
import HowToPlay from './pages/HowToPlay';
import Account from './pages/Account';
import RaceData from './pages/RaceData';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/myteam" element={<MyTeam />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="/howtoplay" element={<HowToPlay />} />
          <Route path="/account" element={<Account />} />
          <Route path="/racedata" element={<RaceData />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
