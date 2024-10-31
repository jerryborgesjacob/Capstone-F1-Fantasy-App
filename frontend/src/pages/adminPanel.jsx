import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [teams, setTeams] = useState([]);
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    fetchTeams();
    fetchLeagues();
  }, []);

  // Fetch all teams
  const fetchTeams = async () => {
    try {
      const response = await axios.get('/api/admin/teams');
      setTeams(response.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  // Fetch all leagues
  const fetchLeagues = async () => {
    try {
      const response = await axios.get('/api/admin/leagues');
      setLeagues(response.data);
    } catch (error) {
      console.error("Error fetching leagues:", error);
    }
  };

  // Delete a team
  const deleteTeam = async (teamId) => {
    try {
      await axios.delete(`/api/admin/teams/${teamId}`);
      setTeams(teams.filter((team) => team._id !== teamId));
    } catch (error) {
      console.error("Error deleting team:", error);
    }
  };

  // Delete a league
  const deleteLeague = async (leagueId) => {
    try {
      await axios.delete(`/api/admin/leagues/${leagueId}`);
      setLeagues(leagues.filter((league) => league._id !== leagueId));
    } catch (error) {
      console.error("Error deleting league:", error);
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>

      <div>
        <h3>Teams</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team._id}>
                <td>{team.name}</td>
                <td>
                  <button onClick={() => deleteTeam(team._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3>Leagues</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leagues.map((league) => (
              <tr key={league._id}>
                <td>{league.name}</td>
                <td>{league.isPrivate ? "Private" : "Public"}</td>
                <td>
                  <button onClick={() => deleteLeague(league._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
