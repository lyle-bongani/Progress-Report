import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
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

const goals = [
  "Learn a new programming language",
  "Contribute to open source projects",
  "Launch a personal website",
  "Improve problem-solving skills",
];

export const Goals = () => (
  <Section>
    <SectionTitle>
      <IconWrapper>
        <FontAwesomeIcon icon={faBullseye} />
      </IconWrapper>
      Goals
    </SectionTitle>
    <CardContainer>
      {goals.map((goal, index) => (
        <Card key={index}>{goal}</Card>
      ))}
    </CardContainer>
  </Section>
);

export default Goals;
