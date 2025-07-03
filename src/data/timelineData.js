// timelineData.js

import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const timelineData = [
  {
    type: 'work',
    date: 'February 2025 - April 2025',
    title: 'Data Consultant @ ACG (intern)',
    description: "Optimized financial reports in IBM Cognos TM1 to support forecasting and  insights. Implemented TurboIntegrator scripts to automate data transformation processes and clean Excel 3D datasets.",
    icon: React.createElement(WorkIcon),
    link: 'https://www.acg.com/',
  },
  {
    type: 'education',
    date: 'September 2020 - May 2024',
    title: 'Undergraduate Student @ Kean University',
    description: 'BS in Computer Science, focus in Cyber Security. Member of Kean\'s Association of Computer Machinery.',
    icon: React.createElement(SchoolIcon),
    link: 'https://www.kean.edu/',
  },
  {
    type: 'work',
    date: 'September 2022 - May 2024',
    title: 'Student Web Administrator @ Kean University Relations',
    description: "Maintained Kean's web presence, ensuring the integrity of information. Resolved accessibility issues and updated web content using Drupal CMS. ",
    icon: React.createElement(WorkIcon),
    link: 'https://www.kean.edu/university-relations',
  },
  {
    type: 'work',
    date: 'June 2022 - August 2022',
    title: 'Software Developer @ Modo Labs (intern)',
    description: "Designed AWS Lambda modules to integrate real-time REST API data into Modo's app platform. Developed a full-stack prototype app using Node.js and AWS DynamoDB to analyze and visualize data.",
    icon: React.createElement(WorkIcon),
    link: 'https://www.modolabs.com/',
  },
  {
    type: 'work',
    date: 'April 2022 - Present',
    title: 'Code Coach @ TheCoderSchool',
    description: "Adapted project-based lessons to teach computer programming and robotics to students aged 10-18. Facilitated problem-solving and collaboration skills through coding challenges and team projects.",
    icon: React.createElement(WorkIcon),
    link: 'https://www.thecoderschool.com/',
  },
  {
    type: 'research',
    date: 'September 2022 - May 2023',
    title: 'Research Recruits Member @ Kean University',
    description: 'Assisted in researching and developing NLP-driven machine learning models to detect phishing attacks, contributing to improved detection accuracy and a significant reduction in false positives.',
    icon: React.createElement(SchoolIcon), 
    link: 'https://www.kean.edu/offices/center-undergraduate-research/undergraduate-student-resources/kean-research-scholar-0/',
  },
];

export default timelineData;
