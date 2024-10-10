import React from 'react';
import { Container, Typography } from '@mui/material';

const Wishlist = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Your Wishlist
            </Typography>
            <Typography variant="body1">
                No items in the wishlist yet.
            </Typography>
        </Container>
    );
};

export default Wishlist;
