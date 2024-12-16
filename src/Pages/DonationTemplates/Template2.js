// src/Pages/Template2.js
import React from "react";
import { Box, Typography, Button, Paper, Container, Avatar, Link } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion";
import GamingIcon from '@mui/icons-material/SportsEsports';

const Template2 = ({ pageData }) => {
    const background = pageData.isBackground && pageData.backgroundUrl
        ? `url(${pageData.backgroundUrl})`
        : "linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)";

    return (
        <Container maxWidth="lg">
            <Paper
                elevation={10}
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                sx={{
                    marginTop: 5,
                    padding: { xs: 3, sm: 5, md: 7 },
                    borderRadius: 4,
                    background: `linear-gradient(
                        to bottom right, 
                        rgba(0, 0, 0, 0.6), 
                        rgba(0, 0, 0, 0.8)
                    ), ${background}`,
                    backgroundBlendMode: "overlay",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "#fff",
                    boxShadow: "0px 15px 35px rgba(0,0,0,0.5)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Decorative Gaming Elements */}
                <Box
                    component={motion.div}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, duration: 1, type: "spring" }}
                    sx={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        opacity: 0.2,
                        transform: "rotate(45deg)",
                    }}
                >
                    <GamingIcon sx={{ fontSize: 100, color: "#00FFC3" }} />
                </Box>

                {/* Top Section: Logo, QR Code, Title */}
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
                                border: "3px solid #00FFC3",
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
                                fontFamily: "'Orbitron', sans-serif",
                                lineHeight: 1.2,
                                fontSize: { xs: "2rem", sm: "3rem" },
                                color: "#00FFC3",
                            }}
                        >
                            {pageData.name || "Join the Battle"}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontStyle: "italic",
                                fontSize: { xs: "1rem", sm: "1.3rem" },
                                mt: 1,
                                color: "#B0E0E6",
                            }}
                        >
                            {pageData.subtitle || "Level Up Your Gaming Experience"}
                        </Typography>
                    </Box>

                    {/* QR Code */}
                    <Box
                        sx={{
                            padding: 2,
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "12px",
                            boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
                            mt: { xs: 2, sm: 0 },
                        }}
                    >
                        <QRCodeCanvas
                            value={pageData.walletAddress}
                            size={120}
                            fgColor="#00FFC3"
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
                        color: "#E0FFFF",
                    }}
                >
                    {pageData.description ||
                        "Embark on an epic journey with our community-driven platform. Whether you're a casual gamer or a competitive enthusiast, we provide the tools and resources you need to elevate your gaming prowess. Connect with like-minded individuals, participate in exclusive events, and unlock rewards that enhance your gaming experience."}
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
                                    variant="outlined"
                                    size="medium"
                                    startIcon={<GamingIcon />}
                                    sx={{
                                        textTransform: "none",
                                        color: "#00FFC3",
                                        borderColor: "#00FFC3",
                                        "&:hover": {
                                            backgroundColor: "rgba(0, 255, 195, 0.1)",
                                            borderColor: "#00FFC3",
                                        },
                                        fontFamily: "'Orbitron', sans-serif",
                                        fontSize: "1rem",
                                        paddingX: 3,
                                        paddingY: 1,
                                        borderRadius: 3,
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    {link.label || 'Join Now'}
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
                            background: "linear-gradient(135deg, #00FFC3, #0077FF)",
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: { xs: "1.1rem", sm: "1.3rem" },
                            padding: { xs: "12px 30px", sm: "14px 40px" },
                            borderRadius: 8,
                            boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                background: "linear-gradient(135deg, #00FFC3, #0055AA)",
                                boxShadow: "0px 15px 35px rgba(0,0,0,0.4)",
                            },
                        }}
                    >
                        {pageData.cta || "Start Now!"}
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
                            color: "#ADD8E6",
                            opacity: 0.9,
                        }}
                    >
                        {pageData.footer}
                    </Typography>
                )}
            </Paper>
        </Container>
    );
};

export default Template2;
