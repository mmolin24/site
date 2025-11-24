import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      name: 'ETL Alternative',
      period: 'January 2024 - Present',
      tech: ['Python', 'Boto3', 'Pyspark', 'SQL', 'Databricks', 'AWS'],
      achievements: [
        'Orchestrated the design and implementation of a highly efficient ETL alternative, aligning with infrastructure and computational requirements, resulting in accelerated data processing speeds and reduced costs.',
        'Developed an asynchronous Lambda Python script leveraging S3 Select for daily extraction of large TSYS files, improving data retrieval efficiency by 87% and significantly reducing processing times for high-volume datasets.',
        'Directed the team\'s transition to Databricks, guiding the use of its scalable environment, collaborating to process data from multiple sources, and ensuring successful schema publication for downstream processing.',
        'Engineered complex SQL queries to curate Snowflake tables, delivering critical metric insights that facilitated the successful production launch of the Lending On Charge (LOC) intent to 3000+ customers.'
      ]
    },
    {
      name: 'Terms MX/API',
      period: 'June 2023 - Present',
      tech: ['Java', 'Spring Boot', 'Cucumber', 'JUnit', 'OnePipeline', 'Jenkins'],
      achievements: [
        'Strengthened two RESTful APIs to support Lending On Charge (LOC) intent for Upmarket (UM) and Small Business Card (SBC) customers, enhancing Web and Mobile content to refine user experience.',
        'Implemented and formatted LOC-specific changes across both APIs, resolving critical bugs that improved data accuracy, reduced downtime, and ensured seamless integration, enhancing overall system reliability.',
        'Served as the main liaison with the partner team, coordinating timelines, production release requirements, and ensuring successful deployment and integration across various platforms.'
      ]
    },
    {
      name: 'Empath',
      period: 'January 2023 - Present',
      tech: ['React', 'TypeScript', 'JavaScript', 'Vue', 'Cypress', 'Docker', 'Jenkins'],
      achievements: [
        'Managed LOC contributions on Capital One\'s Empath platform, working with Product Owners and engineers to address integration challenges and support platform development, gradually expanding responsibilities.',
        'Implemented changes to Account Activity and Statement History APIs, improving LOC field displays (Eligible Carry Over Amount, APR), enhancing clarity and usability, and fixing critical bugs to ensure functionality.',
        'Overhauled the reformatting of APIs, introducing feature toggles that increased platform availability by 100%, enhancing modularity and improving reliability and user experience for LOC customers.'
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">02.</span>
          Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <span className="project-period">{project.period}</span>
              </div>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-achievements">
                <ul>
                  {project.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
