"use client";

import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Goals from "./components/Goals";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Welcome from "./components/Welcome";
import { colors } from "./components/SharedStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBullseye, 
  faTrophy, 
  faProjectDiagram, 
  faBars, 
  faTimes,
  faHome 
} from "@fortawesome/free-solid-svg-icons";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(135deg, ${colors.background}, #E2E8F0);
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
    color: ${colors.text.primary};
  }

  @media (max-width: 768px) {
    body {
      overflow-x: hidden;
    }
  }
`;

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background: ${colors.surface};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem 0;
  position: fixed;
  height: 100vh;
  transition: transform 0.3s ease;
  z-index: 10;
  
  @media (max-width: 768px) {
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
    width: 80%;
  }
`;

const SidebarHeader = styled.div`
  padding: 0 2rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const ProfileName = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProfileTitle = styled.p`
  color: ${colors.text.secondary};
  font-size: 0.9rem;
`;

const NavMenu = styled.ul`
  list-style: none;
  padding: 2rem 0;
`;

const NavItem = styled.li`
  padding: 0.75rem 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${props => props.active ? colors.primary : colors.text.secondary};
  background: ${props => props.active ? 'rgba(99, 102, 241, 0.1)' : 'transparent'};
  border-left: ${props => props.active ? `3px solid ${colors.primary}` : '3px solid transparent'};
  
  &:hover {
    color: ${colors.primary};
    background: rgba(99, 102, 241, 0.05);
  }
  
  svg {
    margin-right: 1rem;
    font-size: 1.2rem;
  }
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 250px;
  padding: 3rem 4rem;
  padding-top: 9rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  min-height: 100vh;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 2rem;
    padding-top: 8rem;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 250px;
  z-index: 5;
  padding: 2.5rem 4rem;
  background: linear-gradient(to bottom, rgba(248, 250, 252, 0.9), rgba(248, 250, 252, 0.8));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, ${colors.primary}20, transparent);
  }
  
  @media (max-width: 768px) {
    left: 0;
    padding: 2rem 2rem;
  }
`;

const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: ${colors.text.primary};
  position: relative;
  padding-left: 1rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 70%;
    background: linear-gradient(to bottom, ${colors.primary}, ${colors.secondary});
    border-radius: 2px;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${colors.text.primary};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`;

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  
  const renderContent = () => {
    switch(activeSection) {
      case 'home':
        return <Welcome />;
      case 'goals':
        return <Goals />;
      case 'achievements':
        return <Achievements />;
      case 'projects':
        return <Projects />;
      default:
        return <Welcome />;
    }
  };
  
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Sidebar isOpen={isSidebarOpen}>
          <SidebarHeader>
            <ProfileName>Lyle</ProfileName>
            <ProfileTitle>Software Developer</ProfileTitle>
          </SidebarHeader>
          <NavMenu>
            <NavItem 
              active={activeSection === 'home'} 
              onClick={() => {
                setActiveSection('home');
                closeSidebar();
              }}
            >
              <FontAwesomeIcon icon={faHome} />
              Home
            </NavItem>
            <NavItem 
              active={activeSection === 'goals'} 
              onClick={() => {
                setActiveSection('goals');
                closeSidebar();
              }}
            >
              <FontAwesomeIcon icon={faBullseye} />
              Goals
            </NavItem>
            <NavItem 
              active={activeSection === 'achievements'} 
              onClick={() => {
                setActiveSection('achievements');
                closeSidebar();
              }}
            >
              <FontAwesomeIcon icon={faTrophy} />
              Achievements
            </NavItem>
            <NavItem 
              active={activeSection === 'projects'} 
              onClick={() => {
                setActiveSection('projects');
                closeSidebar();
              }}
            >
              <FontAwesomeIcon icon={faProjectDiagram} />
              Projects
            </NavItem>
          </NavMenu>
        </Sidebar>
        
        <Overlay isOpen={isSidebarOpen} onClick={closeSidebar} />
        
        <MainContent>
          <Header>
            <Title>
              {activeSection === 'home' && 'Welcome'}
              {activeSection === 'goals' && 'My Goals'}
              {activeSection === 'achievements' && 'My Achievements'}
              {activeSection === 'projects' && 'My Projects'}
            </Title>
            <MenuButton onClick={toggleSidebar}>
              <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
            </MenuButton>
          </Header>
          {renderContent()}
        </MainContent>
      </AppContainer>
    </>
  );
};

export default App;
