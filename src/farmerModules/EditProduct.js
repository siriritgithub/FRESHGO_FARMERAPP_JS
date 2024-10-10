import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const EditProduct = ({ product, onSave }) => {
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [quantity, setQuantity] = useState(product.quantity);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = { ...product, name, description, price: parseFloat(price), quantity: parseInt(quantity) };
        onSave(updatedProduct);
    };

    return (
        <Container>
            <Typography variant="h5" gutterBottom>Edit Product</Typography>
            <form onSubmit={handleSubmit}>
                <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} required fullWidth />
                <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} required fullWidth />
                <TextField label="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required fullWidth />
                <TextField label="Quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required fullWidth />
                <Button type="submit" variant="contained" color="primary">Save Changes</Button>
            </form>
        </Container>
    );
};

export default EditProduct;
