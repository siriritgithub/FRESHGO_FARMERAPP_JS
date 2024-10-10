import React from 'react';
import { Container, Typography } from '@mui/material';
import CartItem from '../Components/CartItem';

const Cart = () => {
  // Example cart items (this could be replaced with state or props from context)
  const cartItems = [
    { id: 1, name: 'Tomatoes', quantity: 2, price: 2 },
    { id: 2, name: 'Potatoes', quantity: 1, price: 1 },
  ];

  const handleRemoveItem = (id) => {
    // Logic to remove item from cart
    alert(`Remove item with id: ${id}`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} onRemove={handleRemoveItem} />
      ))}
    </Container>
  );
};

export default Cart;
