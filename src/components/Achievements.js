import React from 'react';
import { FaTrophy, FaCalendarAlt, FaBuilding, FaMedal, FaCertificate, FaStar } from 'react-icons/fa';
import { Section, SectionTitle, Grid, Card, colors } from './SharedStyles';
import styled from 'styled-components';

const AchievementCard = styled(Card)`
  position: relative;
  overflow: hidden;
  padding: 2rem;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: ${props => {
      switch(props.category) {
        case 'Professional':
          return `linear-gradient(135deg, ${colors.primary}10, ${colors.primary}05)`;
        case 'Certification':
          return `linear-gradient(135deg, ${colors.secondary}10, ${colors.secondary}05)`;
        case 'Award':
          return `linear-gradient(135deg, ${colors.accent}10, ${colors.accent}05)`;
        default:
          return `linear-gradient(135deg, ${colors.primary}10, ${colors.primary}05)`;
      }
    }};
    border-radius: 50%;
    transform: translate(50%, -50%);
    z-index: 0;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  background: ${props => {
    switch(props.category) {
      case 'Professional':
        return `linear-gradient(135deg, ${colors.primary}, ${colors.primary}90)`;
      case 'Certification':
        return `linear-gradient(135deg, ${colors.secondary}, ${colors.secondary}90)`;
      case 'Award':
        return `linear-gradient(135deg, ${colors.accent}, ${colors.accent}90)`;
      default:
        return `linear-gradient(135deg, ${colors.primary}, ${colors.primary}90)`;
    }
  }};
  
  svg {
    font-size: 1.5rem;
    color: white;
  }
`;

const Title = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${colors.text.primary};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${colors.text.secondary};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: auto;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.text.light};
  font-size: 0.9rem;
  
  svg {
    color: ${colors.text.light};
  }
`;

const CategoryBadge = styled.span`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  background: ${props => {
    switch(props.category) {
      case 'Professional':
        return `${colors.primary}15`;
      case 'Certification':
        return `${colors.secondary}15`;
      case 'Award':
        return `${colors.accent}15`;
      default:
        return `${colors.primary}15`;
    }
  }};
  color: ${props => {
    switch(props.category) {
      case 'Professional':
        return colors.primary;
      case 'Certification':
        return colors.secondary;
      case 'Award':
        return colors.accent;
      default:
        return colors.primary;
    }
  }};
`;

const Achievements = () => {
  const achievements = [
    {
      title: "Outstanding Performance Award",
      description: "Recognized for exceptional contributions to the team's success and delivering high-quality projects consistently ahead of schedule.",
      date: "December 2023",
      issuer: "Tech Solutions Inc.",
      category: "Professional",
      icon: FaTrophy
    },
    {
      title: "AWS Certified Solutions Architect",
      description: "Successfully completed AWS certification demonstrating expertise in designing distributed systems and deploying applications on AWS.",
      date: "October 2023",
      issuer: "Amazon Web Services",
      category: "Certification",
      icon: FaCertificate
    },
    {
      title: "Innovation Excellence Award",
      description: "Awarded for developing an innovative automation solution that reduced processing time by 60% and improved team productivity.",
      date: "September 2023",
      issuer: "Global Tech Awards",
      category: "Award",
      icon: FaMedal
    }
  ];

  return (
    <Section>
      <SectionTitle>
        <FaStar />
        Achievements & Recognition
      </SectionTitle>
      <Grid>
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} category={achievement.category}>
            <IconWrapper category={achievement.category}>
              <achievement.icon />
            </IconWrapper>
            <CategoryBadge category={achievement.category}>
              {achievement.category}
            </CategoryBadge>
            <Title>{achievement.title}</Title>
            <Description>{achievement.description}</Description>
            <MetaInfo>
              <MetaItem>
                <FaCalendarAlt />
                {achievement.date}
              </MetaItem>
              <MetaItem>
                <FaBuilding />
                {achievement.issuer}
              </MetaItem>
            </MetaInfo>
          </AchievementCard>
        ))}
      </Grid>
    </Section>
  );
};

export default Achievements;
