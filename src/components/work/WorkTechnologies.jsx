import React from 'react';

const WorkTechnologies = ({ technologies }) => {
  return (
    <ul className="pl-16 flex flex-wrap">
      {technologies.map((t) => (
        <li
          type="button"
          className="m-2 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-rose-700 bg-rose-50 hover:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
        >
          {t}
        </li>
      ))}
    </ul>
  );
};

export default WorkTechnologies;
