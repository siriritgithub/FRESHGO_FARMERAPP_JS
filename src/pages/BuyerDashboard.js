// src/pages/BuyerDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@mui/material';

const BuyerDashboard = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Buyer Dashboard
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth component={Link} to="/buyer/product-browsing">
                        Product Browsing
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth component={Link} to="/buyer/order-placement">
                        Order Placement
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth component={Link} to="/buyer/payment">
                        Payment
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth component={Link} to="/buyer/order-confirmation">
                        Order Confirmation
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth component={Link} to="/buyer/order-history">
                        Order History
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BuyerDashboard;
