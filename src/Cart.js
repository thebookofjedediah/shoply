import { useSelector } from 'react-redux';

function Cart() {

    const cart = useSelector(state => state.cart)
    const inventory = useSelector(state => state.inventory);
    const cartItems = cart.map((item) => ( {...inventory[item.productId], quantity: item.quantity} ))
    const cartTotal = cartItems.reduce((acc, item) => {
      return acc += item.price * item.quantity;
    }, 0)

    const displayItems = cartItems.map((item) => (
        <div key={item.id}>
          <p><b>{item.name}</b></p>    
          <p>${item.price}</p>    
          <p>Quantity: {item.quantity}</p>
        </div>
      ))
  
    return (
      <div className="Cart">
          Cart: {displayItems}
          <span>Subtotal: {cartTotal}</span>
      </div>
    );
  }

export default Cart;