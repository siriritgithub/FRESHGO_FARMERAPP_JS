// src/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // State to hold user info

    const login = (email, password) => {
        // Simple logic to determine user role based on email
        // This is just an example; replace it with your actual authentication logic
        if (email === 'farmer@example.com' && password === 'farmerPassword') {
            setUser({ email, role: 'farmer' });
        } else if (email === 'buyer@example.com' && password === 'buyerPassword') {
            setUser({ email, role: 'buyer' });
        } else {
            // Handle invalid credentials (you might want to throw an error or display a message)
            console.error('Invalid credentials');
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
