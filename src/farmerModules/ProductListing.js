import React from 'react';
import { Button, Container, Typography } from '@mui/material';

const ProductListing = ({ products, onDelete }) => {
    return (
        <Container>
            <Typography variant="h5" gutterBottom>Product Listing</Typography>
            {products.map((product, index) => (
                <div key={index}>
                    <Typography variant="h6">{product.name} - ${product.price}</Typography>
                    <Button onClick={() => onDelete(index)} color="secondary">Delete</Button>
                </div>
            ))}
        </Container>
    );
};

export default ProductListing;
