import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleTicket } from '../../actions';
import Ticket from '../Ticket';
import ErrorIndicator from '../ErrorIndicator';
import Spinner from '../Spinner';

const TicketsList = ({ tickets, toggleTicket, error, loading }) => {

  if (error) {
    return <ErrorIndicator />
  }

  if (loading) {
    return <Spinner />
  }

  const addToCart = (args) => {
    toggleTicket({...args, reserved: false});
  };

  return (
    <StyledTicketsList>
      {tickets.map(item => {
        return <Ticket 
                key={item.id} 
                {...item} 
                addToCart={addToCart} />;
      })}
    </StyledTicketsList>
  );
};

const StyledTicketsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  min-height: 500px;
`;

export default connect(null, { toggleTicket })(TicketsList);