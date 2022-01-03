import React from 'react';

const WorkDetails = ({ details }) => {
  return (
    <ul className="pl-10">
      {details.map((d, idx) => (
        <li key={idx}>&rarr; {d}</li>
      ))}
    </ul>
  );
};

export default WorkDetails;
