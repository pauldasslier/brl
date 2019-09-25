import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TicketsList from '../TicketsList';
import Cart from '../Cart';
import EmptySpace from '../EmptySpace';

const Board = ({ tickets, cartItems, loading, error }) => {
  return (
    <StyledBoard>
      {tickets.length || cartItems.length
      ?
      <>
        <TicketsList 
          tickets={tickets} 
          loading={loading} 
          error={error} />
        <Cart items={cartItems} />
      </>
      : <EmptySpace />}
    </StyledBoard>
  );
}

const StyledBoard = styled.div`
  display: flex;
`;

function mapStateToProps(state) {
  return {
    tickets: state.tickets,
    cartItems: state.cart,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Board);