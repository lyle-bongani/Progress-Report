import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Section, colors } from './SharedStyles';

const WelcomeSection = styled(Section)`
  text-align: center;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(135deg, ${colors.primary}15, ${colors.secondary}15);
    border-radius: 16px 16px 100% 100%;
  }
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 2rem;
  border: 3px solid white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  font-weight: bold;
`;

const WelcomeTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${colors.text.secondary};
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Stats = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: ${colors.text.secondary};
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.text.primary};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-3px);
    color: ${colors.primary};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const Welcome = () => {
  return (
    <WelcomeSection>
      <ProfileImage>L</ProfileImage>
      <WelcomeTitle>Welcome to My Progress Report</WelcomeTitle>
      <Subtitle>
        Tracking my journey in software development, showcasing projects, and documenting achievements.
        Here you'll find my ongoing progress, completed milestones, and future aspirations.
      </Subtitle>
      
      <Stats>
        <StatItem>
          <StatNumber>12+</StatNumber>
          <StatLabel>Projects Completed</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>5+</StatNumber>
          <StatLabel>Years Experience</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>15+</StatNumber>
          <StatLabel>Technologies</StatLabel>
        </StatItem>
      </Stats>

      <SocialLinks>
        <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href="mailto:your.email@example.com">
          <FaEnvelope />
        </SocialLink>
      </SocialLinks>
    </WelcomeSection>
  );
};

export default Welcome; 