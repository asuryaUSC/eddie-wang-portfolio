import React from 'react';
import { AiFillInstagram, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';

const Links = () => {
  return (
    <section className="py-8">
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.instagram.com/eddie.wangg/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-500"
        >
          <AiFillInstagram size="2em" />
        </a>
        <a
          href="mailto:eddiewan@usc.edu"
          className="text-gray-600 hover:text-blue-500"
        >
          <AiOutlineMail size="2em" />
        </a>
        <a
          href="https://www.linkedin.com/in/edwardwngg/e"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-500"
        >
          <AiFillLinkedin size="2em" />
        </a>
      </div>
    </section>
  );
};

export default Links;
