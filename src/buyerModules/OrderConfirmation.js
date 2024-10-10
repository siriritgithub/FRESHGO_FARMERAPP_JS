// src/pages/buyerModules/OrderConfirmation.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const OrderConfirmation = () => {
    const handleViewOrder = () => {
        alert('View order details.');
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Order Confirmed
            </Typography>
            <Typography variant="body1" gutterBottom>
                Thank you for your order! You will receive a confirmation email shortly.
            </Typography>
            <Button onClick={handleViewOrder} variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                View Order Details
            </Button>
        </Container>
    );
};

export default OrderConfirmation;
