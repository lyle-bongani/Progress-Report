import React from 'react';
import styled, { keyframes } from 'styled-components';

// Color System
export const colors = {
  primary: '#6366F1', // Indigo
  secondary: '#10B981', // Emerald
  accent: '#F59E0B', // Amber
  background: '#F8FAFC',
  surface: 'rgba(255, 255, 255, 0.9)',
  text: {
    primary: '#1E293B',
    secondary: '#64748B',
    light: '#94A3B8'
  }
};

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Typography
export const typography = {
  h1: `
    font-family: 'Inter', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.025em;
  `,
  h2: `
    font-family: 'Inter', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.025em;
  `,
  body: `
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    letter-spacing: 0.01em;
  `
};

// Glassmorphism effect
const glassEffect = `
  background: ${colors.surface};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Section = styled.section`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem;
    margin-bottom: 1.5rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${colors.text.primary};
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: ${colors.primary};
    font-size: 1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.35rem;
    margin-bottom: 1.25rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1.25rem;
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.03);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary});
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    padding: 1.25rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    
    &:hover {
      transform: none;
    }
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.text.primary};
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const CardContent = styled.div`
  color: ${colors.text.secondary};
  font-size: 0.95rem;
  line-height: 1.6;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.75rem;
  background: ${colors.primary}15;
  color: ${colors.primary};
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${colors.primary}25;
  }
  
  @media (max-width: 480px) {
    padding: 0.25rem 0.6rem;
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px ${colors.primary}40;
  }
  
  svg {
    font-size: 1.1rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.25rem;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    
    &:hover {
      transform: none;
    }
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 8px;
  background: ${colors.primary}15;
  color: ${colors.primary};
`;

// Remove everything below this line and just export the components
export default {
  colors,
  typography,
  Section,
  SectionTitle,
  Grid,
  Card,
  CardTitle,
  CardContent,
  Tag,
  Button,
  IconWrapper
};