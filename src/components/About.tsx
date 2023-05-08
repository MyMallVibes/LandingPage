import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { socialMedia, sections } = about;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-16 h-16" />
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          {sections.map((section, index) => (
            <a
              key={`${section.name}-${index}`}
              href={section.href}
              className="hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              {section.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-x-8 mt-6 h-8">
          <a
            aria-label="instagram"
            href={socialMedia.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/instagram.png"
              alt="Instagram"
              className="w-6 h-6 text-gray-800 dark:text-white hover:text-primary"
            />
          </a>
          <a
            aria-label="tiktok"
            href={socialMedia.tiktok}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/tiktok.png"
              alt="TikTok"
              className="w-6 h-6 text-gray-800 dark:text-white hover:text-primary"
            />
          </a>
          <a
            aria-label="pinterest"
            href={socialMedia.pinterest}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/pinterest.png"
              alt="Pinterest"
              className="w-6 h-6 text-gray-800 dark:text-white hover:text-primary"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
