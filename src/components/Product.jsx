// Product.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import './Product.css';
const Product = ({ movie }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(1); // Assuming 1 movie is added to the cart
  };

  return (
    <div className='face'>
        
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>{movie.release_date}</p>
            
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
