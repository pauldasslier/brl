import React from 'react';
import styled from 'styled-components';
import RouteForm from '../RouteForm';
import Board from '../Board';

const App = () => {
  return (
    <StyledApp>
      <RouteForm />
      <Board />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
`;

export default App;