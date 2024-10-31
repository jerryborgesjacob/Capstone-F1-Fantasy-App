import React, { useState } from 'react';

const CreateLeague = () => {
  const [leagueName, setLeagueName] = useState('');
  const [leagueType, setLeagueType] = useState('private'); // Default to 'private'
  const [numPlayers, setNumPlayers] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/leagues', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        leagueName,
        leagueType,
        numPlayers,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      setMessage('League created successfully!');
      setLeagueName('');
      setLeagueType('private');
      setNumPlayers(0);
    } else {
      setMessage(`Error: ${data.message}`);
    }
  };

  return (
    <div>
      <h2>Create a League</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>League Name:</label>
          <input
            type="text"
            value={leagueName}
            onChange={(e) => setLeagueName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>League Type:</label>
          <label>
            <input
              type="radio"
              value="private"
              checked={leagueType === 'private'}
              onChange={(e) => setLeagueType(e.target.value)}
            />
            Private
          </label>
          <label>
            <input
              type="radio"
              value="public"
              checked={leagueType === 'public'}
              onChange={(e) => setLeagueType(e.target.value)}
            />
            Public
          </label>
        </div>

        <div>
          <label>Number of Players:</label>
          <input
            type="number"
            value={numPlayers}
            onChange={(e) => setNumPlayers(e.target.value)}
            min="1"
            required
          />
        </div>

        <button type="submit">Create League</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateLeague;
