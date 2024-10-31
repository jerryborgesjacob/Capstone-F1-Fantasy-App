import React from 'react';

function TeamLock({ deadline }) {
  return (
    <div className="team-lock-deadline">
      <p>Team Lock Deadline: {deadline.days} days, {deadline.hours} hours, {deadline.minutes} minutes</p>
    </div>
  );
}

export default TeamLock;