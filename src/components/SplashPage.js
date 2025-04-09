import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCode, faBrain, faRocket } from '@fortawesome/free-solid-svg-icons';
import { colors } from './SharedStyles';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const SplashContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%),
                    radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%);
  background-size: 100px 100px;
  opacity: 0.3;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  animation: ${fadeIn} 1s ease-out;
`;

const WelcomeText = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 3rem;
  opacity: 0.9;
  line-height: 1.6;
  animation: ${fadeIn} 1s ease-out 0.3s both;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  animation: ${fadeIn} 1s ease-out 0.6s both;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  svg {
    font-size: 2rem;
    margin-bottom: 1rem;
    animation: ${float} 3s ease-in-out infinite;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const GetStartedButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  color: ${colors.primary};
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${fadeIn} 1s ease-out 0.9s both;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.9);
  }

  svg {
    margin-left: 0.75rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

function SplashPage({ onGetStarted }) {
  return (
    <SplashContainer>
      <BackgroundPattern />
      <ContentWrapper>
        <WelcomeText>Welcome Lyle!</WelcomeText>
        <Subtitle>
          Track your progress, showcase your achievements, and plan your future in software development.
        </Subtitle>
        <Features>
          <FeatureCard>
            <FontAwesomeIcon icon={faCode} />
            <FeatureTitle>Project Tracking</FeatureTitle>
            <FeatureDescription>
              Document and showcase your development projects with detailed insights
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FontAwesomeIcon icon={faBrain} />
            <FeatureTitle>Skill Growth</FeatureTitle>
            <FeatureDescription>
              Monitor your learning progress and identify areas for improvement
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FontAwesomeIcon icon={faRocket} />
            <FeatureTitle>Goal Setting</FeatureTitle>
            <FeatureDescription>
              Set and track your professional development goals effectively
            </FeatureDescription>
          </FeatureCard>
        </Features>
        <GetStartedButton onClick={onGetStarted}>
          Get Started
          <FontAwesomeIcon icon={faArrowRight} />
        </GetStartedButton>
      </ContentWrapper>
    </SplashContainer>
  );
}

export default SplashPage;