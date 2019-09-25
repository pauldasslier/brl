import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { BigPlane, GrayText} from '../../styles/styled';
import plane from '../../images/plane_fly_grey.png';
import ErrorIndicator from '../ErrorIndicator';
import Spinner from '../Spinner';

const EmptySpace = ({ error, loading }) => {

  if (error) {
    return <ErrorIndicator />
  }

  if (loading) {
    return <Spinner />
  }
  
  return (
    <StyledEmptySpace>
      <BigPlane src={plane} />
      <GrayText>Начните поиск билетов</GrayText>
    </StyledEmptySpace>
  );
};

const StyledEmptySpace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
`;

function mapStateToProps(state) {
  return {
    error: state.error,
    loading: state.loading
  };
}

export default connect(mapStateToProps)(EmptySpace);