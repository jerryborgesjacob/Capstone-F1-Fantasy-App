import React, { useState, useEffect } from 'react';
import ConstructorStandings from '../components/constructorStanding';
import axios from 'axios';
import './RaceData.css';

const RaceData = () => {
  const [standings, setStandings] = useState([]);

  
  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await axios.get('http://ergast.com/api/f1/current/driverStandings.json');
        const standingsData = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        setStandings(standingsData);
      } catch (error) {
        console.error('Error fetching driver standings:', error);
      }
    };

    fetchStandings();
  }, []);

  return (
    <div className="race-data-page">
      <h2>Current Season Driver Standings</h2>
   
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Driver Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((standing, index) => (
            <tr key={standing.Driver.driverId}>
              <td>{index + 1}</td>
              <td>{standing.Driver.givenName} {standing.Driver.familyName}</td>
              <td>{standing.points}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
    <h2>Current Season Constructor Standings</h2>
        <ConstructorStandings /> 
    </div>

    
  );
};

export default RaceData;
