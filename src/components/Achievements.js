import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
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

const achievements = [
  "Completed a full-stack web development course",
  "Developed a mobile app with over 1000 downloads",
  "Received Employee of the Month award",
  "Gave a tech talk at a local meetup",
];

export const Achievements = () => (
  <Section>
    <SectionTitle>
      <IconWrapper>
        <FontAwesomeIcon icon={faTrophy} />
      </IconWrapper>
      Achievements
    </SectionTitle>
    <CardContainer>
      {achievements.map((achievement, index) => (
        <Card key={index}>{achievement}</Card>
      ))}
    </CardContainer>
  </Section>
);

export default Achievements;
