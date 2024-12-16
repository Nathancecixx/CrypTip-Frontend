import React from "react";
import { Box, Typography, Button, Paper, Container, Avatar } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";

const Template1 = ({ pageData }) => {
    const background = pageData.isBackground && pageData.backgroundUrl
        ? `url(${pageData.backgroundUrl})`
        : "linear-gradient(to bottom right, #ff7e5f, #feb47b)";

    return (
        <Container maxWidth="md">
            <Paper
                elevation={5}
                sx={{
                    marginTop: 5,
                    padding: { xs: 3, sm: 4, md: 6 },
                    borderRadius: 8,
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
                            }}
                        />
                    )}

                    {/* QR Code */}
                    <Box
                        sx={{
                            padding: 2,
                            backgroundColor: "#fff",
                            borderRadius: "12px",
                            boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
                        }}
                    >
                        <QRCodeCanvas
                            value={pageData.walletAddress}
                            size={120}
                            fgColor="#333"
                            bgColor="transparent"
                        />
                    </Box>

                    {/* Title and Subtitle */}
                    <Box
                        sx={{
                            textAlign: { xs: "center", sm: "right" },
                            flex: 1,
                            ml: { sm: 3 },
                        }}
                    >
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={{
                                fontFamily: "'Montserrat', sans-serif",
                                lineHeight: 1.2,
                                fontSize: { xs: "1.8rem", sm: "2.5rem" },
                            }}
                        >
                            {pageData.name || "Invest in Our Mission"}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontStyle: "italic",
                                fontSize: { xs: "1rem", sm: "1.2rem" },
                                mt: 1,
                                opacity: 0.9,
                            }}
                        >
                            {pageData.subtitle || "Together, we can shape the future."}
                        </Typography>
                    </Box>
                </Box>

                {/* Description */}
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: "0.9rem", sm: "1.1rem" },
                        lineHeight: 1.6,
                        textAlign: "justify",
                        mb: 4,
                        opacity: 0.9,
                    }}
                >
                    {pageData.description ||
                        "Join us in driving innovation, making an impact, and creating meaningful change. Your investment matters and fuels progress."}
                </Typography>

                {/* Links Section */}
                {Array.isArray(pageData.links) && pageData.links.length > 0 && (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 2,
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
                        sx={{
                            background: "linear-gradient(to right, #ff7e5f, #feb47b)",
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: { xs: "1rem", sm: "1.1rem" },
                            padding: { xs: "10px 20px", sm: "10px 30px" },
                            borderRadius: 8,
                            boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
                                transform: "translateY(-3px)",
                            },
                        }}
                    >
                        {pageData.cta || "Tip Now!"}
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

export default Template1;
