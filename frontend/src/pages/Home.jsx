import './Leagues.css'
import Banner from '../assets/F1-Banner.png';
import nextRace from '../assets/next-race.png';

const HomePage = () => {
    return (
      <div className="homepage">
        
        <div className="banner-image">
          <img src={Banner} alt="Banner image" />
        </div>

        <div className="next-image">
          <a href='/myteam'><img src={nextRace} alt="next race information" /></a>
        </div>

        <h2>Welcome to the F1 Fantasy League</h2>
        <p>Create or join a league, draft your team, and compete for glory!</p>
        <div className="cta-buttons">
          <button className="create-league-btn">Create League</button>
          <button className="join-league-btn">Join League</button>
        </div>
      </div>
    );
  };
  
  export default HomePage;
  