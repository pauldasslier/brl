import React from 'react';
import styled from 'styled-components';

const ErrorIndicator = () => {
  return (
    <StyledIndicator>
      Ошибка! Что-то пошло не так
    </StyledIndicator>
  );
};

const StyledIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 400px;
  color: tomato;
  font-size: 20px;
`;

export default ErrorIndicator;