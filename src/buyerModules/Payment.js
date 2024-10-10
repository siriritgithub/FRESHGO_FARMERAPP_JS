// src/pages/buyerModules/Payment.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Payment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');

    const handlePayment = (e) => {
        e.preventDefault();
        alert('Payment successful!');
        // Add payment logic here
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Payment
            </Typography>
            <form onSubmit={handlePayment}>
                <TextField
                    label="Card Number"
                    fullWidth
                    margin="normal"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                />
                <TextField
                    label="Expiry Date"
                    fullWidth
                    margin="normal"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    required
                />
                <TextField
                    label="CVV"
                    fullWidth
                    margin="normal"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                />
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                    Pay Now
                </Button>
            </form>
        </Container>
    );
};

export default Payment;
