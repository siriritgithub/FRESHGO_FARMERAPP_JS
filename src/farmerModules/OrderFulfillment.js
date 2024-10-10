// src/pages/farmerModules/OrderFulfillment.js
import React, { useState } from 'react';
import { Typography, Button, Grid } from '@mui/material';

const OrderFulfillment = () => {
    const [orders, setOrders] = useState([
        { id: 1, product: 'Tomatoes', status: 'Pending' },
        { id: 2, product: 'Apples', status: 'Shipped' },
    ]);

    const updateOrderStatus = (id, status) => {
        setOrders((prev) =>
            prev.map((order) => (order.id === id ? { ...order, status: status } : order))
        );
    };

    return (
        <div>
            <Typography variant="h5">Order Fulfillment</Typography>
            {orders.map((order) => (
                <Grid container spacing={2} key={order.id} style={{ marginTop: '10px' }}>
                    <Grid item xs={6}>
                        {order.product}
                    </Grid>
                    <Grid item xs={4}>
                        {order.status}
                    </Grid>
                    <Grid item xs={2}>
                        {order.status === 'Pending' && (
                            <Button onClick={() => updateOrderStatus(order.id, 'Shipped')}>Ship</Button>
                        )}
                    </Grid>
                </Grid>
            ))}
        </div>
    );
};

export default OrderFulfillment;
