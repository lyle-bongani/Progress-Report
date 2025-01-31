import React from 'react';
import styled from 'styled-components';

export const Section = styled.div`
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 25px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }
`;

export const SectionTitle = styled.h2`
  color: #34495e;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1.5em;
`;

export const IconWrapper = styled.span`
  margin-right: 15px;
  font-size: 1.2em;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 15px 0;
  border-bottom: 1px solid #bdc3c7;
  transition: background-color 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #ecf0f1;
  }
`;

const MyComponent = () => {
  return (
    <Section>
      <SectionTitle>
        <IconWrapper>🌟</IconWrapper>
        My Section Title
      </SectionTitle>
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
    </Section>
  );
};

export default MyComponent;
// In this example, we've created a set of styled components in a file called SharedStyles.js. We've defined a Section component that wraps a SectionTitle and a List of ListItem components. We've also defined a few other styled components to use within the Section component