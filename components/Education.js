import Image from 'next/image';
import React from 'react';

const skills = ["Leadership", "Teamwork", "Project Management", "Financial Analysis", "Accounting", "Market Research"];

const Education = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-32 h-32 mb-4 md:mb-0 md:mr-8"> {/* Adjust the size of the logo */}
          <Image src="/usc.png" alt="USC Logo" layout="responsive" width={128} height={128} />
        </div>
        <div>
          <h3 className="text-xl font-bold">B.S. Business Administration</h3>
          <p className="text-lg mt-2">University of Southern California - Marshall School of Business</p>
          <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start"> {/* Adjust for even spacing */}
            {skills.map((skill, index) => (
              <span key={index} className="inline-block bg-gray-200 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
