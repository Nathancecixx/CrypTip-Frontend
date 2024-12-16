// src/Pages/DashboardPage.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    // If not authenticated, redirect to login
    if (!isAuthenticated) {
        navigate('/login');
        return null;
    }

    // For now, just show a mock balance
    const mockBalance = '2.5 SOL';

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
                textAlign: 'center',
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: '20px' }}>
                Welcome to Your Dashboard
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                Current Balance:
            </Typography>
            <Typography variant="body1" sx={{ color: '#99AAB5' }}>
                {mockBalance}
            </Typography>
        </Box>
    );
};

export default DashboardPage;
