import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConstructorStandings = () => {
  const [constructorStandings, setConstructorStandings] = useState([]);

  // Fetch the current season constructor standings from API
  useEffect(() => {
    const fetchConstructorStandings = async () => {
      try {
        const response = await axios.get('http://ergast.com/api/f1/current/constructorStandings.json');
        const constructorStandingsData = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        setConstructorStandings(constructorStandingsData);
      } catch (error) {
        console.error('Error fetching constructor standings:', error);
      }
    };

    fetchConstructorStandings();
  }, []);

  return (
    <div className="constructor-standings">
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Constructor Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {constructorStandings.map((standing, index) => (
            <tr key={standing.Constructor.constructorId}>
              <td>{index + 1}</td>
              <td>{standing.Constructor.name}</td>
              <td>{standing.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConstructorStandings;
