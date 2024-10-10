// src/pages/farmerModules/InventoryManagement.js
import React, { useState } from 'react';
import { Typography, Button, Grid } from '@mui/material';

const InventoryManagement = () => {
    const [inventory, setInventory] = useState([
        { name: 'Tomatoes', stock: 20, price: 30 },
        { name: 'Apples', stock: 15, price: 50 },
    ]);

    const handleStockUpdate = (index, change) => {
        const updatedInventory = [...inventory];
        updatedInventory[index].stock += change;
        setInventory(updatedInventory);
    };

    return (
        <div>
            <Typography variant="h5">Inventory Management</Typography>
            {inventory.map((item, index) => (
                <Grid container spacing={2} key={index} style={{ marginTop: '10px' }}>
                    <Grid item xs={4}>
                        {item.name}
                    </Grid>
                    <Grid item xs={4}>
                        Stock: {item.stock}
                    </Grid>
                    <Grid item xs={4}>
                        <Button onClick={() => handleStockUpdate(index, 1)}>+</Button>
                        <Button onClick={() => handleStockUpdate(index, -1)}>-</Button>
                    </Grid>
                </Grid>
            ))}
        </div>
    );
};

export default InventoryManagement;
