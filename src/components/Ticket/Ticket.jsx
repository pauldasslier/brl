import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import plane from '../../images/plane_fly_min.png';

const Ticket = ({ id, duration, from, to, price, time_arrival, time_departure, luggage, addToCart }) => {

  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
    addToCart({id, from, to, price, luggage});
  }

  function parseDate(string) {
    const newString = string.slice(0, 10).replace(/-/g, '.');
    return {
      date: `${newString.slice(0,6)}${newString.slice(8)}`,
      time: string.slice(11)
    }
  }

  const { date: arrDate, time: arrTime } = parseDate(time_arrival);
  const { date: depDate, time: depTime } = parseDate(time_departure);

  return (
    <StyledTicket onClick={handleClick} active={active}>
      <Wrapper>
        <Time>{arrTime}</Time>
        <CityName>{from}</CityName>
        <CityName>{arrDate}</CityName>
      </Wrapper>
      <WrapperCenter>
        <ImageBlock>
          <FlightTime>{`${duration}ч`}</FlightTime>
          <Icon src={plane} />
        </ImageBlock>
        <Stripe />
        <Price>{`${price} р`}</Price>
      </WrapperCenter>
      <Wrapper>
        <Time>{depTime}</Time>
        <CityName>{to}</CityName>
        <CityName>{depDate}</CityName>
      </Wrapper>
    </StyledTicket>
  );
};

const StyledTicket = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-bottom: 20px;
  padding: 25px;
  border-radius: 4px;
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  border: ${props => props.active ? '2px solid #40adff' : '2px solid transparent'};
  box-sizing: border-box;
`;

const ImageBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25px;
`;

const Wrapper = styled.div`
  width: auto;
`;

const WrapperCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center
`;

const Time = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #40adff;
`;

const CityName = styled.div`
  font-size: 12px;
  color: #dfdfdf;
`;

const FlightTime = styled.div`
  padding-right: 3px;
  font-size: 12px;
  color: #40adff;
`;

const Stripe = styled.div`
  position: relative;
  width: 100px;
  height: 2px;
  background-color: #dfdfdf;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 8px;
    height: 8px;
    margin: auto;
    border-radius: 50%;
    background-color: #dfdfdf;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 8px;
    height: 8px;
    margin: auto;
    border-radius: 50%;
    background-color: #dfdfdf;
  }
`;

const Icon = styled.img`
  vertical-align: bottom;
  width: 15px;
  height: 15px;
  fill: #dfdfdf;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #40adff;
`;

Ticket.propTypes = {
  duration: PropTypes.number.isRequired, 
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  time_arrival: PropTypes.string.isRequired,
  time_departure: PropTypes.string.isRequired,
};

export default Ticket;