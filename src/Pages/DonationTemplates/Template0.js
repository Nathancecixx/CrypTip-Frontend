import React from "react";
import { Box, Typography, Button, Avatar, Paper, Container } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import SolonaLogo from "../../Resources/Icons/Solona_Icon.png";

const Template0 = ({ pageData }) => {
    const background = pageData.isBackground && pageData.backgroundUrl
        ? `url(${pageData.backgroundUrl})`
        : "linear-gradient(to bottom right, #6a11cb, #2575fc)";

    return (
        <Container maxWidth="sm">
            <Paper
                elevation={5}
                sx={{
                    marginTop: 5,
                    padding: { xs: 3, sm: 4 },
                    borderRadius: 6,
                    background: `linear-gradient(
                        to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)
                    ), ${background}`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "#fff",
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                        transform: "scale(1.02)",
                        boxShadow: "0px 15px 40px rgba(0,0,0,0.4)",
                    },
                }}
            >
                {/* Top Section: Logo + Title + Subtitle */}
                <Box sx={{ textAlign: "center", mb: 3 }}>
                    {/* Logo */}
                    {pageData.isLogo && pageData.logo && (
                        <Avatar
                            src={pageData.logo}
                            alt={pageData.name}
                            sx={{
                                width: { xs: 80, sm: 100 },
                                height: { xs: 80, sm: 100 },
                                margin: "0 auto",
                                mb: 2,
                            }}
                        />
                    )}

                    {/* Title */}
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{
                            fontFamily: "'Montserrat', sans-serif",
                            lineHeight: 1.2,
                            fontSize: { xs: "1.8rem", sm: "2.2rem" },
                            mb: 1,
                        }}
                    >
                        {pageData.name || "Unknown"}
                    </Typography>

                    {/* Subtitle */}
                    <Typography
                        variant="body1"
                        sx={{
                            fontStyle: "italic",
                            fontSize: { xs: "1rem", sm: "1.2rem" },
                            opacity: 0.9,
                        }}
                    >
                        {pageData.subtitle || "Making the world a better place."}
                    </Typography>
                </Box>

                {/* QR Code Section */}
                <Box
                    sx={{
                        position: "relative",
                        width: 175,
                        height: 175,
                        margin: "0 auto",
                        mb: 3,
                    }}
                >
                    {/* QR Code */}
                    <QRCodeCanvas
                        value={pageData.walletAddress}
                        size={150}
                        fgColor="#333"
                        bgColor="transparent"
                        style={{ width: "100%", height: "100%" }}
                    />

                    {/* Solana Logo Overlay */}
                    <Box
                        component="img"
                        src={SolonaLogo}
                        alt="Solana Logo"
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            backgroundColor: "",
                            padding: "5px",
                        }}
                    />
                </Box>

                {/* Description */}
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: "1rem", sm: "1.1rem" },
                        textAlign: "justify",
                        lineHeight: 1.6,
                        mb: 3,
                        opacity: 0.9,
                    }}
                >
                    {pageData.description ||
                        "Our mission is to create a positive impact by driving change and innovation."}
                </Typography>

                {/* Links Section */}
                {pageData.links && (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 2,
                            flexWrap: "wrap",
                            mb: 3,
                        }}
                    >
                        {Object.entries(pageData.links).map(([label, url], index) => (
                            <Button
                                key={index}
                                href={url.startsWith("http") ? url : `https://${url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outlined"
                                size="small"
                                sx={{
                                    textTransform: "none",
                                    color: "#fff",
                                    borderColor: "#fff",
                                    "&:hover": {
                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    },
                                }}
                            >
                                {label}
                            </Button>
                        ))}
                    </Box>
                )}

                {/* Call-to-Action Button */}
                <Box sx={{ textAlign: "center" }}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            background: "linear-gradient(to right, #6a11cb, #2575fc)",
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: { xs: "1rem", sm: "1.1rem" },
                            padding: { xs: "10px 20px", sm: "12px 30px" },
                            borderRadius: 8,
                            boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
                                transform: "translateY(-3px)",
                            },
                        }}
                    >
                        {pageData.cta || "Donate Now!"}
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

export default Template0;
