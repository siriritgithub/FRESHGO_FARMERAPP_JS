// src/pages/buyerModules/OrderPlacement.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const OrderPlacement = () => {
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState('');
    const [address, setAddress] = useState('');

    const handleOrderPlacement = (e) => {
        e.preventDefault();
        alert(`Order placed for ${quantity} of ${product} to be delivered at ${address}`);
        // Add order placement logic here
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Place an Order
            </Typography>
            <form onSubmit={handleOrderPlacement}>
                <TextField
                    label="Product"
                    fullWidth
                    margin="normal"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    required
                />
                <TextField
                    label="Quantity"
                    fullWidth
                    margin="normal"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />
                <TextField
                    label="Delivery Address"
                    fullWidth
                    margin="normal"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                    Place Order
                </Button>
            </form>
        </Container>
    );
};

export default OrderPlacement;
