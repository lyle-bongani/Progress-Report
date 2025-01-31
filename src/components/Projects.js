import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { Section, SectionTitle, IconWrapper } from "./SharedStyles";
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const projects = [
  "E-commerce platform for local artisans",
  "Task management application for remote teams",
  "Machine learning model for sentiment analysis",
  "Interactive data visualization dashboard",
];

export const Projects = () => (
  <Section>
    <SectionTitle>
      <IconWrapper>
        <FontAwesomeIcon icon={faProjectDiagram} />
      </IconWrapper>
      Completed Projects
    </SectionTitle>
    <CardContainer>
      {projects.map((project, index) => (
        <Card key={index}>{project}</Card>
      ))}
    </CardContainer>
  </Section>
);

export default Projects;
