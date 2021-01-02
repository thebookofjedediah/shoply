import { products } from '../data.json';

// const INITIAL_STATE = Object.entries(products).map((p) => ({id: p[0], ...p[1]}));

export default function inventoryReducer(state = products, action) {
  switch(action.type) {
    default:
      return state;
  }
}