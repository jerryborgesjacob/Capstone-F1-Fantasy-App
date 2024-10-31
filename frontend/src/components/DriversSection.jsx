import React from 'react';
import DriverList from './DriverList';

function DriversSection({ drivers }) {
  return (
    <section className="drivers-section">
      <h2 className="section-title">Drivers</h2>
      <DriverList drivers={drivers} />
    </section>
  );
}

export default DriversSection;