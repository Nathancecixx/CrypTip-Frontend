// src/Components/LiveDemo.js
import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TemplateManager from '../Controllers/TemplateManager'; // Ensure the path is correct

const LiveDemo = () => {
    // Sample DonationPage data with different templateIds
    const donationPages = [
        {
            templateId: 1,
            name: "Music for All",
            subtitle: "Support Independent Artists",
            description: "Donate to support emerging musicians and help them create more amazing music.",
            location: "Global",
            logoUrl: "https://via.placeholder.com/100",
            backgroundUrl: "https://via.placeholder.com/800x400",
            footer: "Thank you for your support!",
            cta: "Donate Now!",
            links: [
                { label: "Website", url: "https://example.com" },
                { label: "Twitter", url: "https://twitter.com" },
            ],
        },
        {
            templateId: 2,
            name: "Art for Change",
            subtitle: "Empower Artists Worldwide",
            description: "Your donations help artists create impactful works that inspire change.",
            location: "Worldwide",
            logoUrl: "https://via.placeholder.com/100",
            backgroundUrl: "https://via.placeholder.com/800x400",
            footer: "Your generosity makes a difference.",
            cta: "Support Now!",
            links: [
                { label: "Facebook", url: "https://facebook.com" },
                { label: "Instagram", url: "https://instagram.com" },
            ],
        },
        {
            templateId: 3,
            name: "Tech Innovators",
            subtitle: "Fuel the Future of Technology",
            description: "Contribute to groundbreaking tech projects that shape our world.",
            location: "Silicon Valley",
            logoUrl: "https://via.placeholder.com/100",
            backgroundUrl: "https://via.placeholder.com/800x400",
            footer: "Innovate with us.",
            cta: "Contribute Today!",
            links: [
                { label: "LinkedIn", url: "https://linkedin.com" },
                { label: "GitHub", url: "https://github.com" },
            ],
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? donationPages.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === donationPages.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <Box
            sx={{
                position: 'relative',
                maxWidth: '900px',
                margin: '0 auto',
                padding: { xs: 2, md: 4 },
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                    marginBottom: '20px',
                }}
            >
                Live Demo: Donation Pages
            </Typography>
            <Box
                sx={{
                    position: 'relative',
                    height: { xs: '800px', md: '700px' },
                    backgroundColor: '#1E1E2F',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
                }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={donationPages[currentIndex].templateId}
                        initial={{ opacity: 0, x: 100, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -100, scale: 0.95 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        style={{ height: '100%' }}
                    >
                        <TemplateManager
                            templateId={donationPages[currentIndex].templateId}
                            pageData={donationPages[currentIndex]}
                        />
                    </motion.div>
                </AnimatePresence>
                {/* Navigation Buttons */}
                <IconButton
                    onClick={handlePrev}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '10px',
                        transform: 'translateY(-50%)',
                        color: '#7289DA',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
                        zIndex: 2,
                    }}
                    aria-label="Previous Donation Page"
                >
                    <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton
                    onClick={handleNext}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)',
                        color: '#7289DA',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
                        zIndex: 2,
                    }}
                    aria-label="Next Donation Page"
                >
                    <ArrowForwardIosIcon />
                </IconButton>
                {/* Pagination Dots */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        bottom: '15px',
                        left: 0,
                        right: 0,
                        gap: '10px',
                        zIndex: 2,
                    }}
                >
                    {donationPages.map((_, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                backgroundColor:
                                    index === currentIndex ? '#7289DA' : '#555555',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease',
                            }}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to Donation Page ${index + 1}`}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );

};

export default LiveDemo;
