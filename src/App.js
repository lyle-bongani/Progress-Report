"use client";

import React from "react";
import styled from "styled-components";
import { Goals } from "./components/Goals";
import { Achievements } from "./components/Achievements";
import { Projects } from "./components/Projects";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
`;

const App = () => {
  return (
    <Container>
      <Title>My Professional Journey</Title>
      <Goals />
      <Achievements />
      <Projects />
    </Container>
  );
};

export default App;
