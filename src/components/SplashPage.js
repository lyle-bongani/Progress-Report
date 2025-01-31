import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SplashContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #007bff;
  color: white;
  text-align: center;
  animation: ${fadeIn} 1s ease-in-out;
`;

const WelcomeText = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin-bottom: 40px;
`;

const GetStartedButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  color: #007bff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }

  svg {
    margin-left: 10px;
  }
`;

function SplashPage({ onGetStarted }) {
  return (
    <SplashContainer>
      <WelcomeText>Welcome Lyle!</WelcomeText>
      <Subtitle>Your journey begins here</Subtitle>
      <GetStartedButton onClick={onGetStarted}>
        Get Started
        <FontAwesomeIcon icon={faArrowCircleRight} size="lg" />
      </GetStartedButton>
    </SplashContainer>
  );
}

export default SplashPage;