// Volunteering.js

import React, { useState, useEffect } from 'react';
import volunteeringData from '../volunteering_experience.json'; // Adjust the path as necessary

const Volunteering = () => {
  const [volunteeringExperiences, setVolunteeringExperiences] = useState([]);

  useEffect(() => {
    // Assume volunteeringData is an array of volunteering objects
    setVolunteeringExperiences(volunteeringData);
  }, []);

  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Volunteering Experience</h2>
      <div className="space-y-4">
        {volunteeringExperiences.map((volunteer, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow-sm hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-xl font-bold">{volunteer.role} - {volunteer.organization}</h3>
            <p className="text-lg">{volunteer.field}</p>
            <p className="text-md italic">{volunteer.dates} ({volunteer.duration})</p>
            <p className="my-2">{volunteer.summary}</p>
            <a href={`https://instagram.com/${volunteer.instagram.substring(1)}`} className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out" target="_blank" rel="noopener noreferrer">{volunteer.instagram}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Volunteering;
