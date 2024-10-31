import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyTeam.css';
import Matches from '../races';
import Teams from '../teams';
import Players from '../drivers';
import '../App.css';
import TeamCRUD from '../teamCRUD';


const MyTeam = () => {
  const [drivers, setDrivers] = useState([]);   
  const [myTeam, setMyTeam] = useState([]);     

  
  useEffect(() => {
    fetch('https://ergast.com/api/f1/current/drivers.json')
      .then(response => response.json())
      .then(data => {
        const driverData = data.MRData.DriverTable.Drivers;
        setDrivers(driverData);
      });
  }, []);

  
  const addDriverToTeam = (driver) => {
    if (!myTeam.some(d => d.driverId === driver.driverId)) {
      setMyTeam([...myTeam, driver]);
    }
  };

  return (
    <div className='myteam-page'>
      <h2>Driver List</h2>

      <div style={{ height: '450px', overflowY: 'scroll' }}>
        <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>Driver Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr key={driver.driverId}>
                <td>{driver.givenName} {driver.familyName}</td>
                <td>
                  <button onClick={() => addDriverToTeam(driver)}>Add</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>My Team</h3>
      <ul>
        {myTeam.map(driver => (
          <li key={driver.driverId}>
            {driver.givenName} {driver.familyName}
          </li>
        ))}
      </ul>

      <button className='submit'>Add Drivers to Team</button>
    </div>
  );
};

export default MyTeam;

    



