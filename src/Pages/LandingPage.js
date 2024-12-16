import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Typography,
    Container,
    Grid,
    Link,
    Card,
    CardContent,
    useMediaQuery,
    useTheme, AppBar, Toolbar, IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import LogoIcon from '../Resources/TipJar_Logo_Icon.png';
import BitcoinIcon from '../Resources/Icons/Bitcoin_Icon.png';
import EthereumIcon from '../Resources/Icons/Ethereum_Icon.png';
import SolonaIcon from '../Resources/Icons/Solona_Icon.png';
import SuiIcon from '../Resources/Icons/Sui_Icon.png';

const LandingPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/wallet');
    };

    const features = [
        {
            title: 'Easy Setup',
            description:
                'Automate server setup with templates, manage roles, channels, and more.',
        },
        {
            title: 'Customizable',
            description:
                'Access tools like project management integrations and code sharing.',
        },
        {
            title: 'Low Fees',
            description:
                'Enhance engagement with moderation tools and server events.',
        },
        {
            title: 'Open-Source',
            description:
                'Our dedicated support team is available around the clock.',
        },
    ]

    const currencies = [
        {
            name: 'Bitcoin',
            symbol: '$BTC',
            icon: BitcoinIcon,
            supported: true,
        },
        {
            name: 'Ethereum',
            symbol: '$ETH',
            icon: EthereumIcon,
            supported: false,
        },
        {
            name: 'Solona',
            symbol: '$SOL',
            icon: SolonaIcon,
            supported: true,
        },
        {
            name: 'SUI',
            symbol: '$SUI',
            icon: SuiIcon,
            supported: false,
        },
    ];

    return (
        <Box sx={{ backgroundColor: '#0D1117', color: '#FFFFFF', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* AppBar */}
            <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', paddingY: '10px' }}>
                <Toolbar sx={{ justifyContent: 'space-between', paddingX: isMobile ? '20px' : '40px' }}>
                    <img src={LogoIcon} alt="TipJar Logo" style={{ width: '50px' }} />
                    <Button
                        variant="outlined"
                        sx={{
                            color: '#FFFFFF',
                            borderColor: '#7289DA',
                            textTransform: 'none',
                            padding: '6px 16px',
                            fontSize: '14px',
                            '&:hover': {
                                borderColor: '#99AAB5',
                            },
                        }}
                        onClick={handleGetStarted}
                    >
                        Get Started
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Hero Section */}
            <Box
                sx={{
                    background: 'linear-gradient(145deg, #2A2E35, #0D1117)',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '20px',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#FFFFFF', marginBottom: '20px' }}>
                        Simplify Your Tips with TipJar
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#99AAB5',
                            marginBottom: '40px',
                            maxWidth: '600px',
                            marginX: 'auto',
                        }}
                    >
                        A fast, secure, and low-cost way to send and receive cryptocurrency tips for creators, friends, and small businesses.
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
                        onClick={handleGetStarted}
                    >
                        Get Started
                    </Button>
                </motion.div>
            </Box>

            {/* Features Section */}
            <Container sx={{ paddingY: theme.spacing(8) }}>
                <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: theme.spacing(5) }}>
                    Why Choose TipJar?
                </Typography>
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <Card
                                    sx={{
                                        backgroundColor: '#161B22',
                                        color: '#FFFFFF',
                                        height: '100%',
                                        padding: '20px',
                                        textAlign: 'center',
                                        borderRadius: '12px',
                                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                                    }}
                                >
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#99AAB5' }}>
                                        {feature.description}
                                    </Typography>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Supported Currencies Section */}
            <Box sx={{ backgroundColor: '#161B22', paddingY: theme.spacing(8) }}>
                <Container>
                    <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: theme.spacing(5) }}>
                        Supported Currencies
                    </Typography>
                    <Grid container spacing={4}>
                        {currencies.map((currency, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Card
                                        sx={{
                                            backgroundColor: '#202225',
                                            color: '#FFFFFF',
                                            textAlign: 'center',
                                            padding: '20px',
                                            borderRadius: '12px',
                                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                                        }}
                                    >
                                        {currency.icon && (
                                            <img
                                                src={currency.icon}
                                                alt={`${currency.name} Icon`}
                                                style={{ width: '40px', marginBottom: '10px' }}
                                            />
                                        )}
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                            {currency.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#99AAB5', marginBottom: '10px' }}>
                                            {currency.symbol}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: currency.supported ? 'green' : 'orange',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {currency.supported ? 'Supported ✅' : 'In Development 🚧'}
                                        </Typography>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Footer */}
            <Box sx={{ backgroundColor: '#0D1117', color: '#99AAB5', paddingY: theme.spacing(4), textAlign: 'center' }}>
                <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                    © {new Date().getFullYear()} TipJar. Built with ❤️ by Nathan Ceci and Team.
                </Typography>
            </Box>
        </Box>
    );
};

export default LandingPage;
