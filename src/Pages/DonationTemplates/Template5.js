import React from "react";
import { Box, Typography, Button, Paper, Container } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Template5 = ({ pageData }) => {
    const background = pageData.isBackground && pageData.backgroundUrl
        ? `url(${pageData.backgroundUrl})`
        : "linear-gradient(to bottom right, #f7971e, #ffd200)";

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
                {/* Header: Event Title and Date */}
                <Box sx={{ textAlign: "center", mb: 3 }}>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        sx={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: { xs: "2rem", sm: "2.5rem" },
                        }}
                    >
                        {pageData.name || "Exciting Event"}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontStyle: "italic",
                            fontSize: { xs: "1rem", sm: "1.2rem" },
                            opacity: 0.9,
                            mt: 1,
                        }}
                    >
                        {pageData.subtitle || "Join us for an unforgettable experience."}
                    </Typography>
                </Box>

                {/* QR Code Section */}
                <Box
                    sx={{
                        position: "relative",
                        width: 150,
                        height: 150,
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
                        src="https://cryptologos.cc/logos/solana-sol-logo.png"
                        alt="Solana Logo"
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            backgroundColor: "#fff",
                            padding: "5px",
                        }}
                    />
                </Box>

                {/* Event Details */}
                <Box sx={{ textAlign: "center", mb: 3 }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, mb: 1 }}>
                        <EventIcon />
                        <Typography variant="body1" sx={{ fontSize: "1rem", opacity: 0.9 }}>
                            {pageData.date || "March 10, 2024"}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
                        <LocationOnIcon />
                        <Typography variant="body1" sx={{ fontSize: "1rem", opacity: 0.9 }}>
                            {pageData.location || "123 Event Venue, City"}
                        </Typography>
                    </Box>
                </Box>

                {/* Ticket Price */}
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                        mb: 3,
                    }}
                >
                    {`Price: ${pageData.ticketPrice || "1 SOL"} per Ticket`}
                </Typography>

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
                        "This event promises a night of excitement, entertainment, and unforgettable moments. Don’t miss out!"}
                </Typography>

                {/* Action Buttons */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        flexWrap: "wrap",
                        mb: 3,
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            background: "linear-gradient(to right, #f7971e, #ffd200)",
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
                        Buy Tickets
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{
                            textTransform: "none",
                            color: "#fff",
                            borderColor: "#fff",
                            "&:hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                            },
                        }}
                    >
                        Add to Calendar
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

export default Template5;
