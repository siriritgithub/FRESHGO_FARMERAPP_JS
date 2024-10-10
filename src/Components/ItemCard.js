import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {
  return (
    <Card style={{ margin: '10px', width: '200px' }}>
      <CardContent>
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="body2">Price: ₹{item.price}</Typography>
        <Button component={Link} to={`/item/${item.id}`} variant="contained" color="primary">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
