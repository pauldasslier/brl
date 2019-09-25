import React from 'react';
import styled from 'styled-components';
import planeUp from '../../images/plane_up.png';
import planeDown from '../../images/plane_down.png';

const PlaceInput = ({ value, direction, changeValue }) => {
  return (
    <div>
      <Text>{direction === 'dep' ? 'Откуда' : 'Куда'}</Text>
      <Input
        type="text"
        direction={direction}
        value={value || ""} 
        onChange={(e) => changeValue(e, direction)} />
    </div>
  );
};

const Input = styled.input`
  position: relative;
  height: 20px;
  width: 200px;
  padding: 10px 5px 10px 45px;
  outline: none;
  border-radius: 4px;
  border: none;
  font-size: 15px;
  background-color: #ffffff;
  background-image: ${props => props.direction === 'dep' ? `url('${planeUp}')`: `url('${planeDown}')`};
  background-repeat: no-repeat;
  background-size: 10%;
  background-position: 5% 50%;
`;

const Text = styled.div`
  margin-bottom: 5px;
  font-size: 14px;
  color: #ffffff;
`;

export default PlaceInput;
