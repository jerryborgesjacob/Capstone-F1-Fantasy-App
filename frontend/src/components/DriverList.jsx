import React from 'react';

function DriverList({ drivers }) {
  return (
    <ul className="driver-list">
      {drivers.map((driver) => (
        <li key={driver.Driver.driverId}>
          <span className="driver-name">{driver.Driver.givenName} {driver.Driver.familyName}</span>
          <span className="driver-points">{driver.points}</span>
        </li>
      ))}
    </ul>
  );
}

export default DriverList;