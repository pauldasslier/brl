
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  TOGGLE_TICKET,
  SEND_CART_TO_SERVER_REQUEST,
  SEND_CART_TO_SERVER_SUCCESS
} from '../actions';

const initialState = {
  loading: false,
  error: false,
  tickets: [],
  cart: []
};

function reserveTickets(cart) {
  if (!cart.length) return [];
  return cart.map(item => {
    item.reserved = true;
    return item;
  });
}

function ticketsHandler(cart, payload) {
  // Ищем выбранный билет в корзине
  const toggledItem = cart.find(item => {
    if (item.id === payload.id && item.reserved === false) {
      return item;
    }
    return false;
  });

  // Если билет есть и не зарезервирован - удалить из корзины
  if (toggledItem) {
    console.log(cart, payload);
    return [...cart].filter(item => {
      if (!(toggledItem.id === item.id && item.reserved === false)) {
        return item;
      }
      return false;
    });
  }
  // Если билета нет - добавить в корзину
  return [...cart, payload];
}

const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        cart: reserveTickets(state.cart)
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        tickets: payload
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        tickets: []
      }
    case TOGGLE_TICKET:
      return {
        ...state,
        cart: ticketsHandler(state.cart, payload)
      };
    case SEND_CART_TO_SERVER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case SEND_CART_TO_SERVER_SUCCESS: {
      console.log(payload, 'данные отправлены');
      return {
        ...state,
        loading: false,
        tickets: [],
        cart: []
      };
    }
    default:
      return state;
  }
};

export default reducer;