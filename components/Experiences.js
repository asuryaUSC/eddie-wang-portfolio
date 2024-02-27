import React, { useState, useEffect } from 'react';
import experiencesData from '../experiences.json'; // Adjust the path as necessary

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    // Assume experiencesData is an array of experience objects
    setExperiences(experiencesData);
  }, []);

  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Experiences</h2>
      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow-sm hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-xl font-bold">{experience.experience_name}</h3>
            <p className="text-lg">{experience.company_name} - {experience.location}</p>
            <p className="text-md italic">{experience.dates}</p>
            <p className="my-2">{experience.summary}</p>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="inline-block bg-gray-200 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-300 transition duration-300 ease-in-out">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
