// src/Pages/LandingPage.js
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
    useTheme,
    AppBar,
    Toolbar,
    IconButton,
    Fade,
} from '@mui/material';
import { motion } from 'framer-motion';
import LogoIcon from '../Resources/TipJar_Logo_Icon.png';
import BitcoinIcon from '../Resources/Icons/Bitcoin_Icon.png';
import EthereumIcon from '../Resources/Icons/Ethereum_Icon.png';
import SolonaIcon from '../Resources/Icons/Solona_Icon.png';
import SuiIcon from '../Resources/Icons/Sui_Icon.png';
import TemplateManager from '../Controllers/TemplateManager'; // Ensure this path is correct
import LiveDemo from '../Components/LiveDemo'; // Import the LiveDemo component
import Customize_Icon from '../Resources/Icons/Customize_Icon.png';
import EeasySetup_Icon from '../Resources/Icons/EasySetup_Icon.png';
import LowFee_Icon from '../Resources/Icons/LowFee_Icon.png';
import OpenSource_Icon from '../Resources/Icons/OpenSource_Icon.png';

const LandingPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/login');
    };

    const features = [
        {
            title: 'Easy Setup',
            description:
                'Automate server setup with templates, manage roles, channels, and more.',
            icon: EeasySetup_Icon, // Add relevant icons
        },
        {
            title: 'Customizable',
            description:
                'Access tools like project management integrations and code sharing.',
            icon: Customize_Icon,
        },
        {
            title: 'Low Fees',
            description:
                'Enhance engagement with moderation tools and server events.',
            icon: LowFee_Icon,
        },
        {
            title: 'Open-Source',
            description:
                'Our dedicated support team is available around the clock.',
            icon: OpenSource_Icon,
        },
    ];

    const currencies = [
        {
            name: 'Bitcoin',
            symbol: '$BTC',
            icon: BitcoinIcon,
            supported: false,
        },
        {
            name: 'Ethereum',
            symbol: '$ETH',
            icon: EthereumIcon,
            supported: false,
        },
        {
            name: 'Solana',
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
        <Box
            sx={{
                backgroundColor: '#0D1117',
                color: '#FFFFFF',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                overflowX: 'hidden',
            }}
        >
            {/* AppBar */}
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: 'rgba(13, 17, 23, 0.8)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'none',
                    paddingY: '10px',
                    zIndex: 1300,
                }}
            >
                <Toolbar
                    sx={{
                        justifyContent: 'space-between',
                        paddingX: isMobile ? '20px' : '40px',
                    }}
                >
                    <Box
                        component="img"
                        src={LogoIcon}
                        alt="TipJar Logo"
                        sx={{ width: isMobile ? '60px' : '75px' }}
                    />
                    <Box>
                        <Button
                            variant="outlined"
                            sx={{
                                color: '#FFFFFF',
                                borderColor: '#7289DA',
                                textTransform: 'none',
                                padding: '6px 16px',
                                fontSize: '14px',
                                borderRadius: '8px',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    borderColor: '#99AAB5',
                                    backgroundColor: 'rgba(114, 137, 218, 0.1)',
                                },
                            }}
                            onClick={handleGetStarted}
                        >
                            Get Started
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Hero Section */}
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #1E1E2F, #0D1117)',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '20px',
                    position: 'relative',
                }}
            >
                {/* Background Animations */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'url(/path/to/background-pattern.svg) no-repeat center center',
                        backgroundSize: 'cover',
                        zIndex: 1,
                        opacity: 0.2,
                    }}
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    style={{ position: 'relative', zIndex: 2 }}
                >
                    <Typography
                        variant={isMobile ? 'h3' : 'h1'}
                        sx={{
                            fontWeight: 'bold',
                            color: '#FFFFFF',
                            marginBottom: '20px',
                            textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
                        }}
                    >
                        Simplify Tips with CrypTip
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#B0B0B0',
                            marginBottom: '40px',
                            maxWidth: '700px',
                            marginX: 'auto',
                            lineHeight: 1.6,
                        }}
                    >
                        A fast and secure way to send and receive cryptocurrency tips for creators, friends, event tickets, and small businesses.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            background: 'linear-gradient(45deg, #7289DA, #5B6EAE)',
                            padding: '12px 36px',
                            fontSize: '18px',
                            textTransform: 'none',
                            borderRadius: '30px',
                            boxShadow: '0px 8px 15px rgba(114, 137, 218, 0.3)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'linear-gradient(45deg, #5B6EAE, #7289DA)',
                                boxShadow: '0px 15px 20px rgba(114, 137, 218, 0.4)',
                            },
                        }}
                        onClick={handleGetStarted}
                    >
                        Get Started
                    </Button>
                </motion.div>
            </Box>

            {/* Features Section */}
            <Container sx={{ paddingY: theme.spacing(8) }}>
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        marginBottom: theme.spacing(5),
                        position: 'relative',
                        display: 'inline-block',
                    }}
                >
                    Why Choose CrypTip?
                    <Box
                        component="span"
                        sx={{
                            display: 'block',
                            width: '50px',
                            height: '4px',
                            backgroundColor: '#7289DA',
                            margin: '10px auto 0',
                            borderRadius: '2px',
                        }}
                    />
                </Typography>
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <Card
                                    sx={{
                                        backgroundColor: '#1E1E2F',
                                        color: '#FFFFFF',
                                        height: '100%',
                                        padding: '30px 20px',
                                        textAlign: 'center',
                                        borderRadius: '16px',
                                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow: '0 20px 30px rgba(0, 0, 0, 0.3)',
                                        },
                                    }}
                                >
                                    {/* Feature Icon */}
                                    <Box
                                        component="img"
                                        src={feature.icon}
                                        alt={`${feature.title} Icon`}
                                        sx={{
                                            width: '50px',
                                            marginBottom: '20px',
                                            transition: 'transform 0.3s ease',
                                        }}
                                    />
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 'bold', marginBottom: '10px' }}
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: '#B0B0B0' }}
                                    >
                                        {feature.description}
                                    </Typography>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Supported Currencies Section */}
            <Box
                sx={{
                    backgroundColor: '#1E1E2F',
                    paddingY: theme.spacing(8),
                    overflow: 'hidden',
                }}
            >
                <Container>
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            marginBottom: theme.spacing(5),
                            position: 'relative',
                            display: 'inline-block',
                        }}
                    >
                        Supported Currencies
                        <Box
                            component="span"
                            sx={{
                                display: 'block',
                                width: '50px',
                                height: '4px',
                                backgroundColor: '#7289DA',
                                margin: '10px auto 0',
                                borderRadius: '2px',
                            }}
                        />
                    </Typography>
                    <Grid container spacing={4}>
                        {currencies.map((currency, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    <Card
                                        sx={{
                                            backgroundColor: '#2A2E35',
                                            color: '#FFFFFF',
                                            textAlign: 'center',
                                            padding: '30px 20px',
                                            borderRadius: '16px',
                                            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-10px)',
                                                boxShadow: '0 20px 30px rgba(0, 0, 0, 0.3)',
                                            },
                                        }}
                                    >
                                        {currency.icon && (
                                            <Box
                                                component="img"
                                                src={currency.icon}
                                                alt={`${currency.name} Icon`}
                                                sx={{
                                                    width: '50px',
                                                    marginBottom: '20px',
                                                    transition: 'transform 0.3s ease',
                                                }}
                                            />
                                        )}
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 'bold', marginBottom: '10px' }}
                                        >
                                            {currency.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: '#B0B0B0', marginBottom: '10px' }}
                                        >
                                            {currency.symbol}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: currency.supported ? '#4CAF50' : '#FF9800',
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

            {/* Live Demo Section */}
            <Box
                sx={{
                    backgroundColor: '#0D1117',
                    paddingY: theme.spacing(8),
                }}
            >
                <Container>
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            marginBottom: theme.spacing(5),
                            position: 'relative',
                            display: 'inline-block',
                            color: '#FFFFFF',
                        }}
                    >
                        Live Demo
                        <Box
                            component="span"
                            sx={{
                                display: 'block',
                                width: '50px',
                                height: '4px',
                                backgroundColor: '#7289DA',
                                margin: '10px auto 0',
                                borderRadius: '2px',
                            }}
                        />
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <LiveDemo />
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Testimonials Section */}
            <Box
                sx={{
                    backgroundColor: '#0D1117',
                    paddingY: theme.spacing(8),
                }}
            >
                <Container>
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            marginBottom: theme.spacing(5),
                            position: 'relative',
                            display: 'inline-block',
                            color: '#FFFFFF',
                        }}
                    >
                        What Our Users Say
                        <Box
                            component="span"
                            sx={{
                                display: 'block',
                                width: '50px',
                                height: '4px',
                                backgroundColor: '#7289DA',
                                margin: '10px auto 0',
                                borderRadius: '2px',
                            }}
                        />
                    </Typography>
                    <Grid container spacing={4}>
                        {/* Example Testimonial */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Fade in={true} timeout={1000}>
                                <Card
                                    sx={{
                                        backgroundColor: '#1E1E2F',
                                        color: '#FFFFFF',
                                        padding: '20px',
                                        borderRadius: '16px',
                                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                                        "CrypTip has revolutionized the way I receive tips from my audience. It's seamless and secure!"
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Box
                                            component="img"
                                            src="/path/to/user1.jpg"
                                            alt="User 1"
                                            sx={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '50%',
                                                marginRight: '15px',
                                            }}
                                        />
                                        <Box>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                                Jane Doe
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#B0B0B0' }}>
                                                Content Creator
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Card>
                            </Fade>
                        </Grid>
                        {/* Repeat for more testimonials */}
                    </Grid>
                </Container>
            </Box>

            {/* Footer */}
            <Box
                sx={{
                    backgroundColor: '#0D1117',
                    color: '#B0B0B0',
                    paddingY: theme.spacing(4),
                    textAlign: 'center',
                }}
            >
                <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                    © {new Date().getFullYear()} CrypTip. Built with ❤️ by Nathan Ceci.
                </Typography>
                <Box>
                    <Link href="#" sx={{ color: '#7289DA', marginX: '10px' }}>
                        Privacy Policy
                    </Link>
                    <Link href="#" sx={{ color: '#7289DA', marginX: '10px' }}>
                        Terms of Service
                    </Link>
                    <Link href="#" sx={{ color: '#7289DA', marginX: '10px' }}>
                        Contact
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default LandingPage;
