import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LeagueStandings = () => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    async function fetchStandings() {
      const response = await axios.post('/api/leagues/update-points');
      setStandings(response.data); // Assuming data includes updated league standings
    }
    fetchStandings();
  }, []);

  return (
    <div>
      <h2>League Standings</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Driver 1</th>
            <th>Driver 2</th>
            <th>Driver 3</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {standings.map(user => (
            <tr key={user.userId}>
              <td>{user.username}</td>
              <td>{user.team[0]?.points || 0}</td>
              <td>{user.team[1]?.points || 0}</td>
              <td>{user.team[2]?.points || 0}</td>
              <td>{user.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueStandings;
