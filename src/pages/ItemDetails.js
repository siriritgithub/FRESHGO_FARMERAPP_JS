// src/pages/ItemDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const ItemDetails = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Simulate fetching item data (replace this with your actual data-fetching logic)
    const fetchItem = async () => {
      // Replace this mock data with your actual data fetching logic
      const mockItems = [
        { id: '1', name: 'Tomato', description: 'Fresh tomatoes', price: 70 },
        { id: '2', name: 'Potatoes',description: 'Fresh Potatoes', price: 100 },
        { id: '3', name: 'Caroots',description: 'Fresh Caroots', price: 50 },
        // Add more items as needed
      ];

      const fetchedItem = mockItems.find((item) => item.id === id);
      setItem(fetchedItem);
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <Typography>Loading...</Typography>; // Handle loading state
  }

  return (
    <Container>
      <Typography variant="h4">{item.name}</Typography>
      <Typography variant="body1">{item.description}</Typography>
      <Typography variant="h6">Price: ${item.price}</Typography>
      <Button variant="contained" color="primary">
        Add to Cart
      </Button>
    </Container>
  );
};

export default ItemDetails;
