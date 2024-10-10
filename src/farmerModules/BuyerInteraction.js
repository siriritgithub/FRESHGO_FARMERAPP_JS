// src/pages/farmerModules/BuyerInteraction.js
import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';

const BuyerInteraction = () => {
    const inquiries = [
        { buyer: 'John Doe', message: 'Interested in 10kg of apples', date: '2024-09-01' },
        { buyer: 'Jane Smith', message: 'Need 20kg of tomatoes', date: '2024-09-03' },
    ];

    return (
        <div>
            <Typography variant="h5">Buyer Interaction</Typography>
            {inquiries.map((inquiry, index) => (
                <Card key={index} style={{ marginTop: '10px' }}>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={8}>
                                <Typography>{inquiry.message}</Typography>
                                <Typography variant="subtitle2">From: {inquiry.buyer}</Typography>
                            </Grid>
                            <Grid item xs={4} style={{ textAlign: 'right' }}>
                                {inquiry.date}
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default BuyerInteraction;
