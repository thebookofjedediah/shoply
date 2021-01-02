import { useSelector, useDispatch } from 'react-redux'
import Product from './Product'
import { ADD_TO_CART } from './actionTypes';

import './App.css';


function App() {

  const addProduct = (id) => {
    dispatch({type: ADD_TO_CART, payload: { productId: id, quantity: 1 } })
  }

  const dispatch = useDispatch();
  const inventory = useSelector(state => state.inventory);
  const shopArr = Object.entries(inventory).map((p) => ({ [p[0]]: p[1] }));
  const products = shopArr.map((product) => {
    const prodId = Object.entries(product)[0][0];
    const prod = Object.entries(product)[0][1];

    return <Product key={prodId} id={prodId} product={prod} addProduct={addProduct} />
  });

  const cart = useSelector(state => state.cart)
  const cartItems = cart.map((item) => ( <div>{inventory[item.productId].name}</div> ))


  return (
    <div className="App">
      <div><b>Cart:</b> {cartItems}</div>
      <h1>Shoply</h1>
      <hr />
      {products}
    </div>
  );
}

export default App;
