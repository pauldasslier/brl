import { createAction } from './createAction';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const fetchDataRequest = createAction(FETCH_DATA_REQUEST);

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const fetchDataSuccess = createAction(FETCH_DATA_SUCCESS);

export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const fetchDataFailure = createAction(FETCH_DATA_FAILURE);

export const TOGGLE_TICKET = 'TOGGLE_TICKET';
export const toggleTicket = createAction(TOGGLE_TICKET);

export const SEND_CART_TO_SERVER_REQUEST = 'SEND_CART_TO_SERVER_REQUEST';
export const sendCartToServerRequest = createAction(SEND_CART_TO_SERVER_REQUEST);

export const SEND_CART_TO_SERVER_SUCCESS = 'SEND_CART_TO_SERVER_SUCCESS';
export const sendCartToServerSuccess = createAction(SEND_CART_TO_SERVER_SUCCESS);