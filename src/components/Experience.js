import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  // Start with all items expanded
  const [expandedIndices, setExpandedIndices] = useState(new Set([0, 1, 2]));

  const experiences = [
    {
      company: 'Thoughtful AI',
      location: 'Remote',
      role: 'Forward Deployed Engineer',
      period: 'Apr 2025 - Present',
      achievements: [
        'Partnered with healthcare providers to implement AI-powered automation solutions for revenue cycle management, analyzing customer workflows to identify high-impact opportunities for agent deployment and operational transformation.',
        'Collaborated cross-functionally with customer technical teams to integrate AI agents into existing healthcare systems, ensuring seamless deployment and alignment with provider requirements and compliance standards.',
        'Enhanced agent development lifecycle by implementing observability tooling and feedback loops, reducing iteration time and improving agent reliability for production healthcare environments.',
        'Drove technical discussions and solution architecture with customer stakeholders, translating complex AI automation capabilities into actionable implementations that directly improved revenue cycle efficiency.',
        'Contributed to the development and refinement of automation workflows using Temporal and Python-based orchestration systems, supporting the mission to transform US healthcare operations through intelligent automation.'
      ],
      tech: ['Python', 'Temporal', 'AI Agents', 'AI Automation', 'Healthcare Systems', 'Observability']
    },
    {
      company: 'Capital One',
      location: 'McLean, VA',
      role: 'Software Engineer',
      period: 'June 2021 - October 2024',
      achievements: [
        'Collaborated with cross-functional teams for the development of Lending On Charge (LOC) features for Small Business Card and Upmarket customers, enhancing existing APIs across multiple departments at Capital One.',
        'Operated as the primary contact for LOC contributions across platforms, leading decisions on future enhancements and ensuring efficient knowledge transfers through comprehensive documentation and cross-team coordination.',
        'Managed 10+ applications within the DevOps team, implementing innovative solutions like the Lambda Failover script and Mongo Reminder to strengthen disaster recovery processes and optimize system health monitoring.',
        'Presented solutions to partner teams, boosting product adoption and engineering productivity.',
        'Mentored junior developers by providing technical guidance, leading code reviews, and promoting best practices, while helping new hires adapt to the team culture and contribute effectively to projects.'
      ],
      tech: ['Java', 'Spring Boot', 'Python', 'AWS', 'Docker', 'Jenkins', 'CI/CD']
    },
    {
      company: 'Montgomery College',
      location: 'Rockville, MD',
      role: 'Instructor',
      period: 'January 2022 - June 2023',
      achievements: [
        'Refined curriculum with Montgomery College to provide courses for PCEP certification.',
        'Led engaging lectures, utilizing diverse teaching methods and time management strategies to guide students transitioning into the technology field, significantly improving their understanding of Python fundamentals.',
        'Increased the student pass rate for PCEP certification to 100% in a classroom of 15+ students by developing an enhanced curriculum and implementing targeted instructional methods tailored to individual learning needs.',
        'Received approval to begin development of PCAP course from scratch, developing all teaching materials.'
      ],
      tech: ['Python', 'Curriculum Development', 'Teaching']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">01.</span>
          Experience
        </h2>
        <div className="timeline">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndices.has(index);
            return (
              <div 
                key={index}
                className={`timeline-item ${isExpanded ? 'expanded' : ''}`}
                onClick={() => {
                  const newExpanded = new Set(expandedIndices);
                  if (isExpanded) {
                    newExpanded.delete(index);
                  } else {
                    newExpanded.add(index);
                  }
                  setExpandedIndices(newExpanded);
                }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h3 className="company-name">{exp.company}</h3>
                      <p className="role">{exp.role}</p>
                      <p className="location">{exp.location}</p>
                    </div>
                    <span className="period">{exp.period}</span>
                  </div>
                  <div className="tech-stack">
                    {exp.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className={`achievements ${isExpanded ? 'show' : ''}`}>
                    <ul>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
