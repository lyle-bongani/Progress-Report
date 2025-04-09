import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faCheckCircle, faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { Section, SectionTitle, Grid, Card, colors } from "./SharedStyles";
import styled from "styled-components";

const GoalCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  padding: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${props => props.completed ? 
      `linear-gradient(to bottom, ${colors.secondary}, ${colors.secondary}80)` :
      `linear-gradient(to bottom, ${colors.primary}, ${colors.primary}80)`};
    border-radius: 4px;
    opacity: ${props => props.completed ? 1 : 0.7};
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

const GoalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const GoalTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${colors.text.primary};
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const GoalDescription = styled.p`
  color: ${colors.text.secondary};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 1.25rem;
  }
`;

const GoalStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: ${props => props.completed ? colors.secondary : colors.text.secondary};
  margin-bottom: 1.5rem;
  padding-left: 1rem;

  svg {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 1.25rem;
    
    svg {
      font-size: 1rem;
    }
  }
`;

const ProgressContainer = styled.div`
  margin-top: auto;
  padding-left: 1rem;
  
  @media (max-width: 480px) {
    padding-left: 0.75rem;
  }
`;

const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  
  @media (max-width: 480px) {
    margin-bottom: 0.5rem;
  }
`;

const ProgressLabel = styled.div`
  font-size: 0.9rem;
  color: ${colors.text.secondary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const ProgressValue = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${props => props.completed ? colors.secondary : colors.primary};
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background: ${colors.primary}15;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  width: ${props => props.progress || '0%'};
  height: 100%;
  background: ${props => props.completed ? 
    `linear-gradient(90deg, ${colors.secondary}, ${colors.secondary}80)` :
    `linear-gradient(90deg, ${colors.primary}, ${colors.primary}80)`};
  border-radius: 4px;
  transition: width 0.5s ease;
`;

const DueDate = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: ${colors.text.light};
  
  svg {
    color: ${colors.text.light};
  }
  
  @media (max-width: 480px) {
    position: static;
    margin-bottom: 1rem;
    font-size: 0.8rem;
  }
`;

const goals = [
  {
    title: "Master React and Next.js",
    description: "Build advanced web applications using React and Next.js, focusing on performance optimization and modern development practices.",
    progress: 75,
    status: "In Progress",
    dueDate: "March 2024",
    completed: false
  },
  {
    title: "Complete AWS Certification",
    description: "Obtain AWS Solutions Architect certification and implement cloud-native applications using AWS services.",
    progress: 45,
    status: "In Progress",
    dueDate: "June 2024",
    completed: false
  },
  {
    title: "Launch Personal Blog",
    description: "Design and develop a personal tech blog to share knowledge and experiences in software development.",
    progress: 100,
    status: "Completed",
    dueDate: "January 2024",
    completed: true
  }
];

const Goals = () => (
  <Section>
    <SectionTitle>
      <FontAwesomeIcon icon={faBullseye} />
      Goals & Objectives
    </SectionTitle>
    <Grid>
      {goals.map((goal, index) => (
        <GoalCard key={index} completed={goal.completed}>
          <DueDate>
            <FontAwesomeIcon icon={faCalendarAlt} />
            {goal.dueDate}
          </DueDate>
          
          <GoalHeader>
            <div>
              <GoalTitle>{goal.title}</GoalTitle>
              <GoalStatus completed={goal.completed}>
                <FontAwesomeIcon icon={goal.completed ? faCheckCircle : faClock} />
                {goal.status}
              </GoalStatus>
            </div>
          </GoalHeader>
          
          <GoalDescription>{goal.description}</GoalDescription>
          
          <ProgressContainer>
            <ProgressHeader>
              <ProgressLabel>
                <FontAwesomeIcon icon={faBullseye} />
                Progress
              </ProgressLabel>
              <ProgressValue completed={goal.completed}>{goal.progress}%</ProgressValue>
            </ProgressHeader>
            <ProgressBarContainer>
              <ProgressBar 
                progress={`${goal.progress}%`}
                completed={goal.completed}
              />
            </ProgressBarContainer>
          </ProgressContainer>
        </GoalCard>
      ))}
    </Grid>
  </Section>
);

export default Goals;
