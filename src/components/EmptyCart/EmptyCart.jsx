import React from 'react';
import { BigPlane, GrayText } from '../../styles/styled';
import plane from '../../images/plane_fly_grey.png';

const EmptyCart = () => {
  return (
    <>
      <BigPlane src={plane} />
      <GrayText>Корзина пуста</GrayText>
    </>
  );
};

export default EmptyCart;