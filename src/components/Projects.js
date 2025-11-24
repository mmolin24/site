import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: 'Temporal Platform Infrastructure',
      period: 'August 2025 - Present',
      tech: ['Temporal', 'Python', 'Aurora DB', 'S3', 'Kubernetes', 'Infrastructure Architecture'],
      achievements: [
        'Led architectural design and RFC development for migrating legacy AI orchestration infrastructure to a modern Temporal-based platform, presenting technical proposals to executive stakeholders and securing organizational buy-in for the migration strategy.',
        'Designed scalable cloud infrastructure architecture leveraging Temporal Cloud for workflow orchestration, Aurora DB for state management, and S3 for artifact storage, ensuring high availability and fault tolerance for mission-critical healthcare automation workflows.',
        'Evaluated and integrated Kubernetes-based deployment strategies for agent execution environments, balancing cost efficiency with performance while establishing workflow patterns and best practices that enabled seamless team adoption.'
      ]
    },
    {
      name: 'AI Agent Observability Platform',
      period: 'May 2025 - Present',
      tech: ['Python', 'OpenTelemetry', 'HyperDX', 'Temporal', 'Distributed Tracing'],
      achievements: [
        'Architected and deployed a comprehensive observability platform using OpenTelemetry for distributed tracing across AI agent workflows, enabling real-time visibility into execution paths, performance bottlenecks, and failure patterns in production healthcare environments.',
        'Integrated HyperDX as the primary tracing backend with custom queries and dashboards, reducing MTTR for production issues by providing detailed execution context and performance metrics across Temporal workflows.',
        'Instrumented Temporal parent and child workflow communications with OpenTelemetry spans, capturing metadata and correlation IDs for end-to-end trace visualization of complex multi-step automation processes spanning multiple services.',
        'Developed standardized tracing patterns and reusable instrumentation libraries for agent development teams, establishing monitoring and alerting strategies that proactively identified performance issues before impacting customer operations.'
      ]
    },
    {
      name: 'ETL Alternative',
      period: 'January 2024 - October 2024',
      tech: ['Python', 'Boto3', 'Pyspark', 'SQL', 'Databricks', 'AWS'],
      achievements: [
        'Orchestrated the design and implementation of a highly efficient ETL alternative, aligning with infrastructure and computational requirements, resulting in accelerated data processing speeds and reduced costs.',
        'Developed an asynchronous Lambda Python script leveraging S3 Select for daily extraction of large TSYS files, improving data retrieval efficiency by 87% and significantly reducing processing times for high-volume datasets.',
        'Directed the team\'s transition to Databricks, guiding the use of its scalable environment, collaborating to process data from multiple sources, and ensuring successful schema publication for downstream processing.',
        'Engineered complex SQL queries to curate Snowflake tables, delivering critical metric insights that facilitated the successful production launch of the Lending On Charge (LOC) intent to 3000+ customers.'
      ]
    },
    {
      name: 'Empath',
      period: 'January 2023 - October 2024',
      tech: ['React', 'TypeScript', 'JavaScript', 'Vue', 'Cypress', 'Docker', 'Jenkins'],
      achievements: [
        'Managed LOC contributions on Capital One\'s Empath platform, working with Product Owners and engineers to address integration challenges and support platform development, gradually expanding responsibilities.',
        'Implemented changes to Account Activity and Statement History APIs, improving LOC field displays (Eligible Carry Over Amount, APR), enhancing clarity and usability, and fixing critical bugs to ensure functionality.',
        'Overhauled the reformatting of APIs, introducing feature toggles that increased platform availability by 100%, enhancing modularity and improving reliability and user experience for LOC customers.'
      ]
    },
    {
      name: 'Terms MX/API',
      period: 'June 2023 - October 2024',
      tech: ['Java', 'Spring Boot', 'Cucumber', 'JUnit', 'OnePipeline', 'Jenkins'],
      achievements: [
        'Strengthened two RESTful APIs to support Lending On Charge (LOC) intent for Upmarket (UM) and Small Business Card (SBC) customers, enhancing Web and Mobile content to refine user experience.',
        'Implemented and formatted LOC-specific changes across both APIs, resolving critical bugs that improved data accuracy, reduced downtime, and ensured seamless integration, enhancing overall system reliability.',
        'Served as the main liaison with the partner team, coordinating timelines, production release requirements, and ensuring successful deployment and integration across various platforms.'
      ]
    }
  ];

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject !== null) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

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
              className="project-card"
              onClick={() => setSelectedProject(index)}
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
              <div className="project-summary">
                <ul>
                  <li>{project.achievements[0]}</li>
                </ul>
              </div>
              {project.achievements.length > 1 && (
                <div className="view-details">
                  <span>View Details →</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedProject !== null && (
        <div 
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="modal-header">
              <h2 className="modal-project-name">{projects[selectedProject].name}</h2>
              <span className="modal-project-period">{projects[selectedProject].period}</span>
            </div>
            <div className="modal-tech">
              {projects[selectedProject].tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="modal-achievements">
              <h3 className="achievements-title">Key Achievements</h3>
              <ul>
                {projects[selectedProject].achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
