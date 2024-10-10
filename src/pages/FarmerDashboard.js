import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@mui/material';
import AddProduct from '../farmerModules/AddProduct';
import ProductListing from '../farmerModules/ProductListing';
import InventoryOverview from '../farmerModules/InventoryOverview';

const FarmerDashboard = () => {
    const [products, setProducts] = useState([]);

    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const handleDeleteProduct = (index) => {
        const newProducts = products.filter((_, i) => i !== index);
        setProducts(newProducts);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Farmer Dashboard</Typography>

            {/* Navigation buttons for different farmer functionalities */}
            <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth component={Link} to="/farmer/product-listing">
                        Product Listing
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth component={Link} to="/farmer/inventory-management">
                        Inventory Management
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth component={Link} to="/farmer/buyer-interaction">
                        Buyer Interaction
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth component={Link} to="/farmer/order-fulfillment">
                        Order Fulfillment
                    </Button>
                </Grid>
            </Grid>

            {/* Section for adding products, managing inventory, and product listing */}
            <AddProduct onAdd={handleAddProduct} />
            <InventoryOverview products={products} />
            <ProductListing products={products} onDelete={handleDeleteProduct} />
        </Container>
    );
};

export default FarmerDashboard;
