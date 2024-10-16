import React from 'react';
import './Leagues.css'; 
import Banner from '../assets/F1-Banner.png';
import League1 from '../assets/league-1.png';
import League2 from '../assets/league-2.png';

const Leagues = () => {
  return (
    <div className="leagues-page">
   
      <div className="banner-image">
        <img src={Banner} alt="Banner" />
      </div>


      <div className="flex-container">
        <div className="options-container">
          <h2>Select a League Type</h2>
          <div className="league-option">
            <h3>Private League</h3>
            <p>Create a private league to compete with friends.</p>
            <button>Join/Create Private League</button>
          </div>
          <div className="league-option">
            <h3>Public League</h3>
            <p>Join a public league to compete with others.</p>
            <button>Join Public League</button>
          </div>
        </div>
        <div className="image-container">
          
          <div className="image-league">
            <img src={League1}></img>
          </div>
          <div className="image-league">
            <img src={League2}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leagues;
