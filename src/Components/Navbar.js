// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import useAuth

const Navbar = () => {
    const { user, logout } = useAuth(); // Get user and logout function from context

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    FarmCommerce
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                {user ? (
                    <>
                        {user.role === 'buyer' && (
                            <>
                                <Button color="inherit" component={Link} to="/items">Items</Button>
                                <Button color="inherit" component={Link} to="/cart">Cart</Button>
                            </>
                        )}
                        {user.role === 'farmer' && (
                            <>
                                <Button color="inherit" component={Link} to="/farmer">Add Items</Button>
                            </>
                        )}
                        <Button color="inherit" onClick={logout}>Logout</Button>
                    </>
                ) : (
                    <>
                        <Button color="inherit" component={Link} to="/login">Login</Button>
                        <Button color="inherit" component={Link} to="/register">Register</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
