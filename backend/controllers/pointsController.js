const axios = require('axios');
const League = require('../models/League');

const ERGAST_API_BASE = 'https://ergast.com/api/f1';

async function updateLeaguePoints(req, res) {
  try {
    //Get previous race results
    const response = await axios.get(`${ERGAST_API_BASE}/current/last/results.json`);
    const raceResults = response.data.MRData.RaceTable.Races[0].Results;

    //Iterate over each league and each user’s team
    const leagues = await League.find();
    for (const league of leagues) {
      for (const user of league.users) {
        let totalPoints = 0;

        // Calculate points based on driver standings
        user.team.forEach(driver => {
          const driverResult = raceResults.find(result => result.Driver.driverId === driver.driverId);
          if (driverResult) {
            
            const points = calculatePointsBasedOnPosition(parseInt(driverResult.position));
            driver.points = points;
            totalPoints += points;
          }
        });

        
        user.totalPoints = totalPoints;
      }
      await league.save(); 
    }

    res.json({ message: 'Points updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating points' });
  }
}


function calculatePointsBasedOnPosition(position) {
  const pointsTable = { 1: 25, 2: 18, 3: 15, 4: 12, 5: 10, 6: 8, 7: 6, 8: 4, 9: 2, 10: 1 };
  return pointsTable[position] || 0; // Default to 0 points for positions 11 and beyond
}

module.exports = { updateLeaguePoints };
