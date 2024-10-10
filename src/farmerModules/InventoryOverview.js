import React from 'react';
import { Container, Typography } from '@mui/material';

const InventoryOverview = ({ products }) => {
    const totalProducts = products.length;
    const averagePrice = totalProducts > 0 ? (products.reduce((sum, product) => sum + product.price, 0) / totalProducts).toFixed(2) : 0;

    return (
        <Container>
            <Typography variant="h5" gutterBottom>Inventory Overview</Typography>
            <Typography>Total Products: {totalProducts}</Typography>
            <Typography>Average Price: ${averagePrice}</Typography>
        </Container>
    );
};

export default InventoryOverview;
