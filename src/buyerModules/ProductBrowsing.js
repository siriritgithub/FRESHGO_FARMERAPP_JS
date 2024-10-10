// src/pages/buyerModules/ProductBrowsing.js
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const ProductBrowsing = () => {
    // Mock data for products
    const products = [
        { name: 'Organic Apples', price: '$10', category: 'Fruits' },
        { name: 'Whole Grain Wheat', price: '$20', category: 'Grains' },
        { name: 'Raw Honey', price: '$15', category: 'Honey' }
    ];

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Browse Products
            </Typography>
            <List>
                {products.map((product, index) => (
                    <ListItem key={index}>
                        <ListItemText 
                            primary={`${product.name} - ${product.price}`} 
                            secondary={`Category: ${product.category}`} 
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default ProductBrowsing;
