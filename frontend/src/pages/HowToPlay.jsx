import './HowToPlay.css'
import step1 from '../assets/helmet.svg';
import step3 from '../assets/drs.svg';
import step2 from '../assets/free.svg';
const HowToPlay = () => {
    return (
      <div className="howtoplay">
        <h1>How to Play</h1>
        <p>Learn how to draft a team, score points, and compete in the F1 Fantasy League.</p>


    
      <section className="how-to-play-section">
        <div className="section-content">
          <div className="section-image">
           
            <div className="image-placeholder">
                <img src={step2} alt='helmet'></img>
            </div>
          </div>
          <div className="section-text">
            <h2>Join for Free</h2>
            <p>
              F1 Fantasy is free to play. Simply <a href="/login">Login</a> with your F1 or 
              <a href="/register"> Register</a> with F1 Fantasy League.
            </p>
            
          </div>
        </div>
      </section>

     
      <section className="how-to-play-section">
        <div className="section-content">
          <div className="section-text">
            <h2>Create up to 3 teams</h2>
            <p>
              Each team consists of 5 drivers. Stay within the cost cap of $100m.
            </p>
            
          </div>
          <div className="section-image">
            
            <div className="image-placeholder">
            <img src={step1} alt='helmet'></img>
            </div>
          </div>
        </div>
      </section>

      
      <section className="how-to-play-section">
        <div className="section-content">
          <div className="section-image">

            <div className="image-placeholder">
            <img src={step3} alt='helmet'></img>
            </div>
          </div>
          <div className="section-text">
            <h2>DRS Boost</h2>
            <p>
              Choose which driver will score double points.
            </p>
            <p>
              Pick one driver in your team to receive the DRS Boost. Any driver in your team can receive the DRS Boost, which will double their score for that Grand Prix.
            </p>
          </div>
        </div>
      </section>
    </div>

    );
  };
  
  export default HowToPlay;
  