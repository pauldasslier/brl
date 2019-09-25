import React from 'react';
import styled from 'styled-components';

const LuggageControl = ({ weight = 0, changeWeight }) => {
  return (
    <StyledLuggageControl>
      <Text>Багаж (кг)</Text>
      <Wrapper>
        <Btn onClick={() => changeWeight('inc')}>+</Btn>
        <Count>{weight}</Count>
        <Dec onClick={() => changeWeight('dec')}>—</Dec>
      </Wrapper>
    </StyledLuggageControl>
  );
};

const StyledLuggageControl = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 180px;
  height: 80%;
  padding: 20px 40px;
  border-left: 1px solid #ffffff;
  box-sizing: border-box;
`;

const Text = styled.div`
  margin-bottom: 5px;
  font-size: 10px;
  color: #ffffff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  line-height: 25px;
  color: #65c7ff;
  font-size: 22px;
  background-color: #ffffff;
  border-radius: 50%;
  cursor: pointer;
`;

const Dec = styled(Btn)`
  font-size: 18px;
`;

const Count = styled.div`
  color: #ffffff;
  font-size: 22px;
`;

export default LuggageControl;