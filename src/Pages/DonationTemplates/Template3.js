// src/Pages/Template3.js
import React from "react";
import { Box, Typography, Button, Paper, Container, Avatar, Link } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin'; // Crypto-related icon

const Template3 = ({ pageData }) => {
    const background = pageData.isBackground && pageData.backgroundUrl
        ? `url(${pageData.backgroundUrl})`
        : "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"; // Default gradient

    return (
        <Container maxWidth="lg">
            <Paper
                elevation={10}
                component={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                sx={{
                    marginTop: 5,
                    padding: { xs: 3, sm: 5, md: 7 },
                    borderRadius: 4,
                    background: `linear-gradient(
                        to bottom right, 
                        rgba(255, 255, 255, 0.8), 
                        rgba(255, 255, 255, 0.6)
                    ), ${background}`,
                    backgroundBlendMode: "overlay",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "#333",
                    boxShadow: "0px 15px 35px rgba(0,0,0,0.2)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Decorative Crypto Elements */}
                <Box
                    component={motion.div}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    sx={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        opacity: 0.1,
                    }}
                >
                    <CurrencyBitcoinIcon sx={{ fontSize: 100, color: "#FFD700" }} />
                </Box>

                {/* Top Section: Logo, Title, QR Code */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: { xs: 2, sm: 4 },
                        gap: { xs: 2, sm: 0 },
                    }}
                >
                    {/* Logo */}
                    {pageData.isLogo && pageData.logo && (
                        <Avatar
                            src={pageData.logo}
                            alt={pageData.name}
                            sx={{
                                width: { xs: 80, sm: 100 },
                                height: { xs: 80, sm: 100 },
                                mb: { xs: 2, sm: 0 },
                                border: "2px solid #FFD700",
                            }}
                        />
                    )}

                    {/* Title and Subtitle */}
                    <Box
                        sx={{
                            textAlign: { xs: "center", sm: "left" },
                            flex: 1,
                        }}
                    >
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            sx={{
                                fontFamily: "'Roboto Slab', serif",
                                lineHeight: 1.2,
                                fontSize: { xs: "2rem", sm: "3rem" },
                                color: "#FFD700",
                            }}
                        >
                            {pageData.name || "Empower Your Crypto Journey"}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontStyle: "italic",
                                fontSize: { xs: "1rem", sm: "1.3rem" },
                                mt: 1,
                                color: "#555",
                            }}
                        >
                            {pageData.subtitle || "Join us in shaping the future of finance"}
                        </Typography>
                    </Box>

                    {/* QR Code */}
                    <Box
                        sx={{
                            padding: 2,
                            backgroundColor: "rgba(255, 215, 0, 0.1)", // Gold tint
                            borderRadius: "12px",
                            boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                            mt: { xs: 2, sm: 0 },
                        }}
                    >
                        <QRCodeCanvas
                            value={pageData.walletAddress}
                            size={120}
                            fgColor="#FFD700"
                            bgColor="transparent"
                        />
                    </Box>
                </Box>

                {/* Description */}
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: "1rem", sm: "1.2rem" },
                        lineHeight: 1.8,
                        textAlign: "justify",
                        mb: 4,
                        color: "#555",
                    }}
                >
                    {pageData.description ||
                        "Dive into the world of cryptocurrency with our comprehensive platform. Whether you're a seasoned trader or just starting out, we provide the tools and resources you need to navigate the crypto landscape with confidence. Connect with a vibrant community, access real-time market data, and take control of your financial future."}
                </Typography>

                {/* Links Section */}
                {Array.isArray(pageData.links) && pageData.links.length > 0 && (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 3,
                            flexWrap: "wrap",
                            mb: 4,
                        }}
                    >
                        {pageData.links.map((link, index) => {
                            const linkUrl = typeof link.url === 'string' ? link.url : '';
                            const finalUrl = linkUrl.startsWith('http') ? linkUrl : `https://${linkUrl}`;
                            return (
                                <Button
                                    key={index}
                                    href={finalUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="contained"
                                    size="medium"
                                    sx={{
                                        textTransform: "none",
                                        color: "#fff",
                                        backgroundColor: "#FFD700",
                                        "&:hover": {
                                            backgroundColor: "#FFC107",
                                        },
                                        fontFamily: "'Roboto Slab', serif",
                                        fontSize: "1rem",
                                        paddingX: 3,
                                        paddingY: 1,
                                        borderRadius: 3,
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    {link.label || 'Visit'}
                                </Button>
                            );
                        })}
                    </Box>
                )}

                {/* Call-to-Action Button */}
                <Box sx={{ textAlign: "center" }}>
                    <Button
                        variant="contained"
                        size="large"
                        component={motion.div}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        sx={{
                            background: "linear-gradient(45deg, #FFD700 30%, #FF8C00 90%)",
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: { xs: "1.1rem", sm: "1.3rem" },
                            padding: { xs: "12px 30px", sm: "14px 40px" },
                            borderRadius: 8,
                            boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                background: "linear-gradient(45deg, #FFC107 30%, #FF7F50 90%)",
                                boxShadow: "0px 15px 35px rgba(0,0,0,0.3)",
                            },
                        }}
                    >
                        {pageData.cta || "Get Started"}
                    </Button>
                </Box>

                {/* Footer */}
                {pageData.footer && (
                    <Typography
                        variant="caption"
                        sx={{
                            display: "block",
                            textAlign: "center",
                            mt: 4,
                            color: "#777",
                            opacity: 0.8,
                        }}
                    >
                        {pageData.footer}
                    </Typography>
                )}
            </Paper>
        </Container>
    );
};

export default Template3;
