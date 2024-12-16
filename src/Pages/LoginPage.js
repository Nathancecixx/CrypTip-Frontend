import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = () => {
        // Simulate a login by calling login()
        login();
        // After login, navigate to dashboard
        navigate('/dashboard');
    };

    return (
        <Box
            sx={{
                backgroundColor: '#0D1117',
                color: '#FFFFFF',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: '20px' }}>
                Please Log In
            </Typography>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#7289DA',
                    padding: '12px 36px',
                    fontSize: '18px',
                    textTransform: 'none',
                    '&:hover': { backgroundColor: '#4752C4' },
                }}
                onClick={handleLogin}
            >
                Log In
            </Button>
        </Box>
    );
};

export default LoginPage;
