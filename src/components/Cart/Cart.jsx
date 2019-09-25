import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { sendCartToServerRequest } from '../../actions';
import CartItem from '../CartItem';
import EmptyCart from '../EmptyCart';

const Cart = ({ items, sendCartToServerRequest }) => {
  
  // Суммируем одинаковые билеты
  const sumCartItems = items.reduce((sum, current) => {
    current.count = 1;
    if (sum.length) {
      const idx = sum.findIndex(item => (item.id === current.id && item.luggage === current.luggage));
      if (idx !== -1) {
        sum[idx].count++;
        return sum;
      }
    }
    sum.push(current);
    return sum;
  }, []);

  function sendData() {
    const data = prepareData();
    sendCartToServerRequest(data);
  }

  function prepareData() {
    return JSON.stringify(sumCartItems.map(({ id, luggage, count }) => ({id, luggage, count})));
  }

  const cartItems = sumCartItems.map(({ id, luggage, ...otherProps }) => {
    return <CartItem key={`${id + luggage}`} {...otherProps} />;
  });

  return (
    <StyledCart>
      {sumCartItems.length 
      ?
      <>
        {cartItems}
        <BuyBtn onClick={sendData}>Купить</BuyBtn>
      </>
      : <EmptyCart />}
    </StyledCart>
  );
};

const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #f1f1f1;
  min-height: 400px;
  height: 100%;
  width: 310px;
  padding: 25px;
`;

const BuyBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 60px;
  margin: auto 20px 5px 20px;
  font-size: 20px;
  color: #ffffff;
  border-radius: 4px;
  background-color: #5dc1ff;
  cursor: pointer;
`;

export default connect(null, { sendCartToServerRequest })(Cart);