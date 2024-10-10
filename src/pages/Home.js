// src/pages/Home.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container style={{ textAlign: 'center', padding: '50px' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to FarmCommerce
      </Typography>
      <Typography variant="h5" gutterBottom>
        Buy fresh produce directly from farmers!
      </Typography>
     
    </Container>
  );
};

export default Home;
