// HonorsAwards.js

import React, { useState, useEffect } from 'react';
import honorsAwardsData from '../honors_awards.json'; // Adjust the path as necessary

const HonorsAwards = () => {
  const [honorsAwards, setHonorsAwards] = useState([]);

  useEffect(() => {
    // Assume honorsAwardsData is an array of honors/awards objects
    setHonorsAwards(honorsAwardsData);
  }, []);

  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Honors & Awards</h2>
      <div className="space-y-4">
        {honorsAwards.map((award, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow-sm hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-xl font-bold">{award.award_name}</h3>
            <p className="text-lg">{award.issued_by}</p>
            <p className="text-md italic">{award.date_issued}</p>
            <p className="my-2">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HonorsAwards;
