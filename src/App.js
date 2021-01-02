import { useSelector } from 'react-redux'
import Product from './Product'

import './App.css';

function App() {

  const inventory = useSelector(state => state.inventory);
  const products = inventory.map((product) => (<Product key={product.id} product={product} />))

  return (
    <div className="App">
      <h1>Shoply</h1>
      <hr />
      {products}
    </div>
  );
}

export default App;
