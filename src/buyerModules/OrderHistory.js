// src/pages/buyerModules/OrderHistory.js
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const OrderHistory = () => {
    // Mock data for orders
    const orders = [
        { id: 1, product: 'Organic Apples', status: 'Delivered', date: '2024-09-15' },
        { id: 2, product: 'Whole Grain Wheat', status: 'Shipped', date: '2024-09-12' },
        { id: 3, product: 'Raw Honey', status: 'Delivered', date: '2024-09-10' }
    ];

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Order History
            </Typography>
            <List>
                {orders.map((order) => (
                    <ListItem key={order.id}>
                        <ListItemText
                            primary={`${order.product} - ${order.status}`}
                            secondary={`Date: ${order.date}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default OrderHistory;
