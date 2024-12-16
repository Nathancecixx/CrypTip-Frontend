import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '@solana/wallet-adapter-react';
import { useAuth } from '../AuthContext';

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const { connected } = useWallet();

    const handleLogin = async () => {
        if (!connected) {
            // Let the user know they need to connect their wallet first
            alert('Please connect your wallet first!');
            return;
        }

        // Now that the wallet is connected, proceed with login
        await login();
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

            {/* Place the WalletMultiButton here so the user can connect their wallet */}
            <WalletMultiButton />

            <Button
                variant="contained"
                sx={{
                    marginTop: '20px',
                    backgroundColor: '#7289DA',
                    padding: '12px 36px',
                    fontSize: '18px',
                    textTransform: 'none',
                    '&:hover': { backgroundColor: '#4752C4' },
                }}
                onClick={handleLogin}
            >
                Log In With Wallet
            </Button>
        </Box>
    );
};

export default LoginPage;
