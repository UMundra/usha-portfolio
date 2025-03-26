import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="section skills">
      <h2>Technical Skills</h2>
      <ul className="skills-list">
        <li><strong>Frameworks & Libraries:</strong> React.js, Angular, TypeScript, Redux</li>
        <li><strong>Web Technologies:</strong> HTML, CSS, DOM, JavaScript, Bootstrap, Ajax, XML, JSON, jQuery</li>
        <li><strong>UI/UX Design & Implementation:</strong> Figma, Responsive Web Design, Accessibility (WCAG), Cross-Device Compatibility</li>
        <li><strong>Performance Enhancements:</strong> Lazy Loading, Code Splitting</li>
        <li><strong>Backend API Development:</strong> Node.js, Express.js, GraphQL, RESTful APIs, Microservices, Serverless, Backend-for-Frontend</li>
        <li><strong>Databases & Storage:</strong> SQL (Oracle, MySQL, PostgreSQL), NoSQL (MongoDB, Firebase, Blob storage)</li>
        <li><strong>Tools:</strong> Azure, Docker, Amazon Web Services (EC2, S3, EKS), Jenkins</li>
        <li><strong>Version Control & Collaboration:</strong> Git, GitHub, GitLab, Bitbucket, JIRA, Agile & Scrum</li>
        <li><strong>Testing Frameworks:</strong> Jest, JSLint, Cypress, Jasmine, Playwright</li>
      </ul>
    </section>
  );
}

export default Skills;