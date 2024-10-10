import React from 'react';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const handleQuantityChange = (event) => {
    onUpdateQuantity(item.id, Number(event.target.value));
  };

  return (
    <Card style={{ margin: '10px', padding: '10px' }}>
      <CardContent>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="body2">Price: ₹{item.price}</Typography>
        <Typography variant="body2">Total: ₹{item.price * item.quantity}</Typography>
        <TextField
          label="Quantity"
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          inputProps={{ min: 1 }}
          style={{ marginBottom: '10px' }}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => onRemove(item.id)}
        >
          Remove
        </Button>
      </CardContent>
    </Card>
  );
};

export default CartItem;
