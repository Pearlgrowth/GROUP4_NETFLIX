// Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { state } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      <p>Product Count: {state.count}</p>
    </div>
  );
};

export default Cart;
