import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PlaceInput from '../PlaceInput';
import LuggageControl from '../LuggageControl';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../../actions';
import FlightService from '../../services/FlightService';

class RouteForm extends Component {
  state = {
    from: '',
    to: '',
    luggageWeight: 0
  };

  flightService = new FlightService();

  getTickets({ weight }) {
    const { fetchDataRequest, 
      fetchDataSuccess, fetchDataFailure } = this.props;
    const { from, to } = this.state;
    
    if (!from && !to) return;
    
    fetchDataRequest();
    this.flightService.getTickets(from, to, weight)
    .then(data => fetchDataSuccess(data))
    .catch(err => fetchDataFailure(err));
  }

  handleChange = (e, direction) => {
    if (direction === 'dep') {
      this.setState({from: e.target.value});
    } else {
      this.setState({to: e.target.value});
    }
  };

  changeWeight = (type) => {
    let { luggageWeight } = this.state;
    const step = 5;
    if (type === 'inc') {
      this.setState({luggageWeight: luggageWeight + step});
      this.getTickets({weight: luggageWeight + step});
    } else {
      if (luggageWeight === 0) return;
      this.setState({luggageWeight: luggageWeight - step});
      this.getTickets({weight: luggageWeight - step});
    }
  };

  render() {
    const { from, to, luggageWeight } = this.state;

    return (
      <StyledRouteForm>
        <PlaceInput 
          value={from} 
          direction={'dep'} 
          changeValue={this.handleChange} />
        <PlaceInput 
          value={to} 
          direction={'arr'} 
          changeValue={this.handleChange} />
        <LuggageControl weight={luggageWeight} changeWeight={this.changeWeight} />
      </StyledRouteForm>
    );
  }
}

const StyledRouteForm = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  background: linear-gradient(to right, #45adff, #65c7ff);
`;

const mapDispathToProps = {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure
};

export default connect(null, mapDispathToProps)(RouteForm);
