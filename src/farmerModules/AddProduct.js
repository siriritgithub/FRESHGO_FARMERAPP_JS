import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const AddProduct = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = { name, description, price: parseFloat(price), quantity: parseInt(quantity) };
        onAdd(newProduct);
        // Reset fields
        setName('');
        setDescription('');
        setPrice('');
        setQuantity('');
    };

    return (
        <Container>
            <Typography variant="h5" gutterBottom>Add New Product</Typography>
            <form onSubmit={handleSubmit}>
                <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} required fullWidth />
                <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} required fullWidth />
                <TextField label="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required fullWidth />
                <TextField label="Quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required fullWidth />
                <Button type="submit" variant="contained" color="primary">Add Product</Button>
            </form>
        </Container>
    );
};

export default AddProduct;
