
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actionTypes';

const INITIAL_STATE = localStorage.getItem('userCart')
? JSON.parse(localStorage.getItem('userCart'))
: [];

export default function cartReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_TO_CART:
        return [...state, action.payload];
    case REMOVE_FROM_CART:
        return [...state].filter((item) => item.productId !== action.payload);
    default:
      return state;
  }
}