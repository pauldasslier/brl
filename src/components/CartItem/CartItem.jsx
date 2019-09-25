import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import plane from '../../images/plane_fly_min.png';

const CartItem = ({ from, to, price, count }) => {
  const getRightWord = (count) => {
    switch(count) {
      case 1:
        return 'билет';
      case 2:
      case 3:
      case 4:
        return 'билета';
      default:
        return 'билетов';
    }
  };

  const word = getRightWord(count);
  return (
    <StyledCartItem>
      <CityRow>
        <CityName>{from}</CityName>
        <Icon src={plane} />
        <CityName>{to}</CityName>
      </CityRow>
      <SumRow>
        <Sum>{count}</Sum>
        <Text>{`${word} на сумму`}</Text>
        <Sum>{`${price * count} р`}</Sum>
      </SumRow>
    </StyledCartItem>
  );
};

const StyledCartItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  border-bottom: 1px solid #dfdfdf;
`;

const CityRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SumRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  margin-top: 10px;
  color: #c7c7c7;
`;

const CityName = styled.div`
  font-size: 16px;
  color: #646464;
`;

const Sum = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #5dc1ff;
`;

const Icon = styled.img`
  width: 12px;
  height: 12px;
`;

const Text = styled.span`
  margin: 0 5px;
`;

CartItem.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default CartItem;