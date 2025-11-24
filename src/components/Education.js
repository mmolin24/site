import React from 'react';
import './Education.css';

const Education = () => {
  const skills = [
    'AWS Solutions Architect',
    'PCAP certified',
    'Java Spring Boot',
    'Python',
    'Temporal',
    'AI Agents',
    'AI Automation',
    'Kubernetes',
    'OpenTelemetry',
    'Distributed Tracing',
    'Observability',
    'TypeScript',
    'React',
    'Javascript',
    'SQL',
    'Databricks',
    'PySpark',
    'Aurora DB',
    'Jenkins',
    'Automation',
    'CI/CD',
    'Docker',
    'Git'
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">03.</span>
          Education
        </h2>
        <div className="education-content">
          <div className="education-card">
            <div className="education-header">
              <h3 className="university-name">University of Maryland, College Park</h3>
              <p className="degree">Bachelor of Science in Computer Science</p>
              <p className="location">College Park, MD</p>
              <p className="period">Aug. 2019 -- Dec. 2021</p>
            </div>
            <div className="skills-section">
              <h4 className="skills-title">Skills & Certifications</h4>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
