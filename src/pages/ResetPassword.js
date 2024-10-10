import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Card, CardContent } from '@mui/material';

const ResetPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Password reset link has been sent to: ${email}`);
        // Add your password reset logic here (e.g., send reset email)
    };

    return (
        <Container maxWidth="sm">
            <Card>
                <CardContent>
                    <Typography variant="h4" gutterBottom align="center">
                        Reset Password
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Email"
                            type="email"
                            fullWidth
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{ marginTop: '20px' }}
                        >
                            Send Reset Link
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default ResetPassword;
