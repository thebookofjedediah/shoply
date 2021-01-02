import { products } from '../data.json';

const INITIAL_STATE = products;

export default function inventoryReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    default:
      return state;
  }
}