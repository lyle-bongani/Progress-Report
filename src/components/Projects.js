import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaCalendarAlt, FaTools } from 'react-icons/fa';
import { Section, SectionTitle, Grid, Card, CardTitle, CardContent, Tag } from './SharedStyles';
import styled from 'styled-components';

const ProjectCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #6366F1, #10B981);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const ProjectInfo = styled.div`
  flex: 1;
`;

const ProjectStatus = styled.div`
  display: inline-block;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  background: ${props => props.status === 'Completed' ? '#10B98120' : '#6366F120'};
  color: ${props => props.status === 'Completed' ? '#10B981' : '#6366F1'};
`;

const ProjectDescription = styled.p`
  margin: 1rem 0;
  line-height: 1.6;
  color: #64748B;
`;

const TechStack = styled.div`
  margin: 1.5rem 0;
`;

const TechLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #64748B;
  margin-bottom: 0.75rem;
  
  svg {
    color: #6366F1;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid #E2E8F0;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  
  ${props => props.primary ? `
    background: linear-gradient(135deg, #6366F1, #10B981);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
    }
  ` : `
    background: #F8FAFC;
    color: #64748B;
    
    &:hover {
      background: #F1F5F9;
      transform: translateY(-2px);
    }
  `}
`;

const Projects = () => {
  const projects = [
    {
      title: "Progress Report Dashboard",
      description: "A modern web application for tracking and visualizing progress reports with interactive charts and real-time updates. Features include customizable dashboards, data visualization, and collaborative tools.",
      technologies: ["React", "Node.js", "D3.js", "MongoDB"],
      github: "https://github.com/username/progress-report",
      demo: "https://progress-report-demo.com",
      status: "In Progress",
      date: "2024"
    },
    {
      title: "Task Management System",
      description: "A comprehensive task management solution with features like task prioritization, team collaboration, and progress tracking. Implements modern UI/UX principles for optimal user experience.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      github: "https://github.com/username/task-manager",
      demo: "https://task-manager-demo.com",
      status: "Completed",
      date: "2023"
    },
    // Add more projects as needed
  ];

  return (
    <Section>
      <SectionTitle>
        <FaCode />
        Projects & Portfolio
      </SectionTitle>
      <Grid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectHeader>
              <ProjectInfo>
                <CardTitle>{project.title}</CardTitle>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
                  <FaCalendarAlt style={{ color: '#64748B' }} />
                  <span style={{ color: '#64748B', fontSize: '0.9rem' }}>{project.date}</span>
                </div>
              </ProjectInfo>
              <ProjectStatus status={project.status}>{project.status}</ProjectStatus>
            </ProjectHeader>
            
            <ProjectDescription>{project.description}</ProjectDescription>
            
            <TechStack>
              <TechLabel>
                <FaTools />
                Technologies
              </TechLabel>
              <div>
                {project.technologies.map((tech, i) => (
                  <Tag key={i}>{tech}</Tag>
                ))}
              </div>
            </TechStack>
            
            <ProjectLinks>
              <LinkButton href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
                View Code
              </LinkButton>
              <LinkButton href={project.demo} target="_blank" rel="noopener noreferrer" primary>
                <FaExternalLinkAlt />
                Live Demo
              </LinkButton>
            </ProjectLinks>
          </ProjectCard>
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;
