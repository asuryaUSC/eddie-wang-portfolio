import React, { useState, useEffect } from 'react';
import certificationsData from '../certifications.json'; // Adjust the path as necessary

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    // Assume certificationsData is an array of certification objects
    setCertifications(certificationsData);
  }, []);

  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
      <div className="space-y-4">
        {certifications.map((certification, index) => (
          <div key={index} className="flex items-center bg-gray-100 p-4 rounded-md shadow-sm hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            <img src="/nexusedge.png" alt="NexusEdge Logo" className="h-12 w-12 mr-4"/>
            <div>
              <h3 className="text-xl font-bold">{certification.name}</h3>
              <p className="text-lg">{certification.organization}</p>
              <p className="text-md italic">{certification.date_issued}</p>
              <a href={certification.link} className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out" target="_blank" rel="noopener noreferrer">View Certificate</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
