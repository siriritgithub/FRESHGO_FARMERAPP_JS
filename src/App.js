import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; 
import Home from './pages/Home';
import BuyerDashboard from './pages/BuyerDashboard';
import FarmerDashboard from './pages/FarmerDashboard';
import Cart from './pages/Cart'; // Import Cart
import ItemDetails from './pages/ItemDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './Components/Navbar'; // Import Navbar
import Wishlist from './pages/Wishlist'; // Import Wishlist

// Importing modules
import ProductListing from './farmerModules/ProductListing';
import InventoryManagement from './farmerModules/InventoryManagement';
import BuyerInteraction from './farmerModules/BuyerInteraction';
import OrderFulfillment from './farmerModules/OrderFulfillment';
import ProductBrowsing from './buyerModules/ProductBrowsing';
import OrderPlacement from './buyerModules/OrderPlacement';
import Payment from './buyerModules/Payment';
import OrderConfirmation from './buyerModules/OrderConfirmation';
import OrderHistory from './buyerModules/OrderHistory';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar /> {/* Navbar is now globally accessible */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    
                    {/* Buyer and Farmer Dashboards */}
                    <Route path="/buyer" element={<BuyerDashboard />} />
                    <Route path="/farmer" element={<FarmerDashboard />} />

                    {/* Modules for Buyers */}
                    <Route path="/buyer/product-browsing" element={<ProductBrowsing />} />
                    <Route path="/buyer/order-placement" element={<OrderPlacement />} />
                    <Route path="/buyer/payment" element={<Payment />} />
                    <Route path="/buyer/order-confirmation" element={<OrderConfirmation />} />
                    <Route path="/buyer/order-history" element={<OrderHistory />} />
                    
                    {/* Modules for Farmers */}
                    <Route path="/farmer/product-listing" element={<ProductListing />} />
                    <Route path="/farmer/inventory-management" element={<InventoryManagement />} />
                    <Route path="/farmer/buyer-interaction" element={<BuyerInteraction />} />
                    <Route path="/farmer/order-fulfillment" element={<OrderFulfillment />} />

                    {/* Additional routes */}
                    <Route path="/item/:id" element={<ItemDetails />} />

                    {/* Cart and Wishlist Routes */}
                    <Route path="/cart" element={<Cart />} /> {/* Add to Cart Page */}
                    <Route path="/wishlist" element={<Wishlist />} /> {/* Wishlist Page */}
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
