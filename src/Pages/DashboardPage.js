// src/Pages/DashboardPage.js
import React, { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    TextField,
    Button,
    Paper,
    Alert,
    CircularProgress,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormControlLabel,
    Checkbox,
    List,
    ListItem,
    IconButton,
    Divider
} from '@mui/material';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from '../Data/Firebase';

import TemplateManager from '../Controllers/TemplateManager';
import DeleteIcon from '@mui/icons-material/Delete';

const DashboardPage = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const { publicKey } = useWallet();
    const { connection } = useConnection();

    const [balance, setBalance] = useState(null);

    // Page fields
    const [templateId, setTemplateId] = useState(1);
    const [isMinter, setIsMinter] = useState(false);
    const [tokenName, setTokenName] = useState("");
    const [tokenSupply, setTokenSupply] = useState("");

    const [name, setName] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [logoUrl, setLogoUrl] = useState("");
    const [backgroundUrl, setBackgroundUrl] = useState("");
    const [footer, setFooter] = useState("");
    const [cta, setCta] = useState("");
    const [links, setLinks] = useState([]);

    const [newLinkLabel, setNewLinkLabel] = useState("");
    const [newLinkUrl, setNewLinkUrl] = useState("");

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);

    useEffect(() => {
        const fetchBalance = async () => {
            if (publicKey) {
                const lamports = await connection.getBalance(publicKey);
                const sol = lamports / LAMPORTS_PER_SOL;
                setBalance(sol);
            }
        };
        fetchBalance();
    }, [publicKey, connection]);

    useEffect(() => {
        const fetchPageData = async () => {
            if (!publicKey) {
                setLoading(false);
                return;
            }
            setLoading(true);
            try {
                const docRef = doc(db, "tippages", publicKey.toBase58());
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setTemplateId(Number(data.templateId) || 1);
                    setIsMinter(Boolean(data.isMinter));
                    setTokenName(typeof data.tokenName === 'string' ? data.tokenName : "");
                    setTokenSupply(typeof data.tokenSupply === 'string' ? data.tokenSupply : "");

                    setName(typeof data.name === 'string' ? data.name : "");
                    setSubtitle(typeof data.subtitle === 'string' ? data.subtitle : "");
                    setDescription(typeof data.description === 'string' ? data.description : "");
                    setLocation(typeof data.location === 'string' ? data.location : "");
                    setLogoUrl(typeof data.logoUrl === 'string' ? data.logoUrl : "");
                    setBackgroundUrl(typeof data.backgroundUrl === 'string' ? data.backgroundUrl : "");
                    setFooter(typeof data.footer === 'string' ? data.footer : "");

                    setCta(typeof data.cta === 'string' ? data.cta : "");
                    setLinks(Array.isArray(data.links) ? data.links.map(link => ({
                        label: typeof link.label === 'string' ? link.label : '',
                        url: typeof link.url === 'string' ? link.url : ''
                    })) : []);
                } else {
                    // Defaults if no page
                    setTemplateId(1);
                    setIsMinter(false);
                    setTokenName("");
                    setTokenSupply("");

                    setName("Your Page Name");
                    setSubtitle("Experience the Future of Music");
                    setDescription("Join us for an immersive experience blending cutting-edge technology and live music.");
                    setLocation("Crypto Arena, New York City");
                    setLogoUrl("");
                    setBackgroundUrl("");
                    setFooter("Thank you for supporting Crypto Music Festival!");

                    setCta("Donate Now!");
                    setLinks([]);
                }
            } catch (err) {
                console.error("Error fetching page data:", err);
                setError("Failed to load page data.");
            }
            setLoading(false);
        };
        fetchPageData();
    }, [publicKey]);

    const handleSave = async () => {
        if (!publicKey) {
            setError("No wallet connected.");
            return;
        }

        if (!name.trim()) {
            setError("Name cannot be empty.");
            return;
        }

        setSaving(true);
        setError(null);
        setSuccessMsg(null);

        const safeLinks = Array.isArray(links) ? links.map(link => ({
            label: typeof link.label === 'string' ? link.label : '',
            url: typeof link.url === 'string' ? link.url : ''
        })) : [];

        const newData = {
            templateId,
            name: name.trim(),
            subtitle: subtitle.trim(),
            description: description.trim(),
            location: location.trim(),
            logoUrl: logoUrl.trim(),
            backgroundUrl: backgroundUrl.trim(),
            footer: footer.trim(),
            isMinter,
            tokenName: tokenName.trim(),
            tokenSupply: tokenSupply.trim(),
            walletAddress: publicKey.toBase58(),
            date: new Date().toISOString(),
            cta: cta.trim(),
            links: safeLinks
        };

        try {
            await setDoc(doc(db, "tippages", publicKey.toBase58()), newData);
            setSuccessMsg("Page saved successfully!");
        } catch (err) {
            console.error("Error saving page:", err);
            setError("Failed to save page. Please try again.");
        }
        setSaving(false);
    };

    const handleAddLink = () => {
        const trimmedLabel = newLinkLabel.trim();
        const trimmedUrl = newLinkUrl.trim();
        if (trimmedLabel && trimmedUrl) {
            setLinks([...links, { label: trimmedLabel, url: trimmedUrl }]);
            setNewLinkLabel("");
            setNewLinkUrl("");
        }
    };

    const handleRemoveLink = (index) => {
        const updatedLinks = links.filter((_, i) => i !== index);
        setLinks(updatedLinks);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    // Define template options based on isMinter
    const templateOptions = isMinter ?
        [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] :
        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Ensure templateId is valid for the current isMinter setting
    useEffect(() => {
        const validTemplates = isMinter ? [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        if (!validTemplates.includes(templateId)) {
            // Reset to the first valid template ID
            setTemplateId(validTemplates[0]);
        }
    }, [isMinter, templateId]);

    const pageData = {
        templateId,
        name: String(name),
        subtitle: String(subtitle),
        description: String(description),
        location: String(location),
        logoUrl: String(logoUrl),
        backgroundUrl: String(backgroundUrl),
        footer: String(footer),
        isMinter: Boolean(isMinter),
        tokenName: String(tokenName),
        tokenSupply: String(tokenSupply),
        cta: String(cta),
        links
    };

    return (
        <Box
            sx={{
                backgroundColor: '#0D1117',
                color: '#FFFFFF',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                padding: { xs: '20px', md: '40px' }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px',
                    flexWrap: 'wrap'
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '1.8rem', md: '2rem' },
                        marginBottom: { xs: '10px', md: '0px' }
                    }}
                >
                    Your Dashboard
                </Typography>
                <Button
                    variant="outlined"
                    sx={{
                        textTransform: 'none',
                        color: '#FFF',
                        borderColor: '#7289DA',
                        '&:hover': { borderColor: '#99AAB5' },
                        fontSize: { xs: '0.8rem', md: '0.875rem' },
                        paddingX: { xs: 1, md: 2 },
                        paddingY: { xs: 0.5, md: 1 },
                        marginTop: { xs: '10px', md: '0' }
                    }}
                    onClick={handleLogout}
                >
                    Log Out
                </Button>
            </Box>

            <Typography
                variant="body1"
                sx={{
                    textAlign: 'center',
                    marginBottom: '40px',
                    color: '#99AAB5',
                    fontSize: { xs: '0.9rem', md: '1rem' }
                }}
            >
                Connected Wallet: {publicKey ? publicKey.toBase58() : "Not Connected"}<br/>
                Current Balance: {balance !== null ? `${balance} SOL` : "Loading..."}
            </Typography>

            {error && <Alert severity="error" sx={{ marginBottom: '20px', fontSize: { xs: '0.8rem', md: '1rem' } }}>{error}</Alert>}
            {successMsg && <Alert severity="success" sx={{ marginBottom: '20px', fontSize: { xs: '0.8rem', md: '1rem' } }}>{successMsg}</Alert>}

            {loading ? (
                <CircularProgress sx={{ display: 'block', margin: '0 auto', marginTop: '50px' }} />
            ) : (
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Paper
                            sx={{
                                padding: { xs: 2, md: 4 },
                                backgroundColor: '#161B22',
                                borderRadius: 4
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    marginBottom: '20px',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    fontSize: { xs: '1.3rem', md: '1.5rem' }
                                }}
                            >
                                Page Editor
                            </Typography>

                            {/* Template and Minter Section */}
                            <Typography variant="h6" sx={{ color: '#99AAB5', marginBottom: '10px', fontSize: { xs: '1rem', md: '1.1rem' } }}>
                                Template & Minting
                            </Typography>
                            <FormControl fullWidth sx={{ marginBottom: '15px', backgroundColor: '#202225', borderRadius: 1 }}>
                                <InputLabel sx={{ color: '#99AAB5', fontSize: { xs: '0.85rem', md: '1rem' } }}>Template ID</InputLabel>
                                <Select
                                    value={templateId}
                                    label="Template ID"
                                    onChange={(e) => setTemplateId(Number(e.target.value))}
                                    sx={{ color: '#FFFFFF', fontSize: { xs: '0.85rem', md: '1rem' } }}
                                >
                                    {templateOptions.map((num) => (
                                        <MenuItem key={num} value={num}>
                                            {num}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isMinter}
                                        onChange={(e) => setIsMinter(e.target.checked)}
                                        sx={{ color: '#FFFFFF' }}
                                    />
                                }
                                label={<Typography sx={{ color: '#99AAB5', fontSize: { xs: '0.85rem', md: '1rem' } }}>Enable Token Minting</Typography>}
                                sx={{ marginBottom: '15px' }}
                            />

                            {isMinter && (
                                <>
                                    <TextField
                                        fullWidth
                                        label="Token Name"
                                        variant="outlined"
                                        value={tokenName}
                                        onChange={(e) => setTokenName(e.target.value)}
                                        sx={{ marginBottom: '15px', backgroundColor: '#202225', borderRadius: 1 }}
                                        InputLabelProps={{ style: { color: '#99AAB5' } }}
                                        inputProps={{ style: { color: '#FFFFFF', fontSize: '0.9rem' } }}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Token Supply"
                                        type="number"
                                        variant="outlined"
                                        value={tokenSupply}
                                        onChange={(e) => setTokenSupply(e.target.value)}
                                        sx={{ marginBottom: '15px', backgroundColor: '#202225', borderRadius: 1 }}
                                        InputLabelProps={{ style: { color: '#99AAB5' } }}
                                        inputProps={{ style: { color: '#FFFFFF', fontSize: '0.9rem' } }}
                                        helperText="How many tokens can be minted?"
                                    />
                                </>
                            )}

                            <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.1)' }} />

                            {/* Basic Page Info Section */}
                            <Typography variant="h6" sx={{ color: '#99AAB5', marginBottom: '10px', fontSize: { xs: '1rem', md: '1.1rem' } }}>
                                Basic Information
                            </Typography>
                            <TextField
                                fullWidth
                                label="Name"
                                variant="outlined"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                sx={{ marginBottom: '15px', backgroundColor: '#202225', borderRadius: 1 }}
                                InputLabelProps={{ style: { color: '#99AAB5' } }}
                                inputProps={{ style: { color: '#FFFFFF', fontSize: '0.9rem' } }}
                            />
                            <TextField
                                fullWidth
                                label="Subtitle"
                                variant="outlined"
                                value={subtitle}
                                onChange={(e) => setSubtitle(e.target.value)}
                                sx={{ marginBottom: '15px', backgroundColor: '#202225', borderRadius: 1 }}
                                InputLabelProps={{ style: { color: '#99AAB5' } }}
                                inputProps={{ style: { color: '#FFFFFF', fontSize: '0.9rem' } }}
                            />
                            <TextField
                                fullWidth
                                label="Description"
                                multiline
                                rows={3}
                                variant="outlined"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                sx={{ marginBottom: '15px', backgroundColor: '#202225', borderRadius: 1 }}
                                InputLabelProps={{ style: { color: '#99AAB5' } }}
                                inputProps={{ style: { color: '#FFFFFF', fontSize: '0.9rem' } }}
                            />
                            <TextField
                                fullWidth
                                label="Location"
                                variant="outlined"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                sx={{ marginBottom: '15px', backgroundColor: '#202225', borderRadius: 1 }}
                                InputLabelProps={{ style: { color: '#99AAB5' } }}
                                inputProps={{ style: { color: '#FFFFFF', fontSize: '0.9rem' } }}
                            />

                            <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.1)' }} />

                            {/* Media Section */}
                            <Typography variant="h6" sx={{ color: '#99AAB5', marginBottom: '10px', fontSize: { xs: '1rem', md: '1.1rem' } }}>
                                Media & Styling
                            </Typography>
                            <TextField
                                fullWidth
                                label="Logo URL"
                                variant="outlined"
                                value={logoUrl}
                                onChange={(e) => setLogoUrl(e.target.value)}
                                sx={{ marginBottom: '15px', backgroundColor: '#202225', borderRadius: 1 }}
                                InputLabelProps={{ style: { color: '#99AAB5' } }}
                                inputProps={{ style: { color: '#FFFFFF', fontSize: '0.9rem' } }}
                                helperText="Optional: URL to your event logo image."
                            />
                            <TextField
                                fullWidth
                                label="Background URL"
                                variant="outlined"
                                value={backgroundUrl}
                                onChange={(e) => setBackgroundUrl(e.target.value)}
                                sx={{ marginBottom: '15px', backgroundColor: '#202225', borderRadius: 1 }}
                                InputLabelProps={{ style: { color: '#99AAB5' } }}
                                inputProps={{ style: { color: '#FFFFFF', fontSize: '0.9rem' } }}
                                helperText="Optional: URL to your background image."
                            />
                            <TextField
                                fullWidth
                                label="Call To Action"
                                variant="outlined"
                                value={cta}
                                onChange={(e) => setCta(e.target.value)}
                                sx={{ marginBottom: '15px', backgroundColor: '#202225', borderRadius: 1 }}
                                InputLabelProps={{ style: { color: '#99AAB5' } }}
                                inputProps={{ style: { color: '#FFFFFF', fontSize: '0.9rem' } }}
                                helperText="E.g., 'Donate Now!', 'Support Our Cause'"
                            />
                            <TextField
                                fullWidth
                                label="Footer Text"
                                variant="outlined"
                                value={footer}
                                onChange={(e) => setFooter(e.target.value)}
                                sx={{ marginBottom: '15px', backgroundColor: '#202225', borderRadius: 1 }}
                                InputLabelProps={{ style: { color: '#99AAB5' } }}
                                inputProps={{ style: { color: '#FFFFFF', fontSize: '0.9rem' } }}
                            />

                            <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.1)' }} />

                            {/* Links Section */}
                            <Typography variant="h6" sx={{ color: '#99AAB5', marginBottom: '10px', fontSize: { xs: '1rem', md: '1.1rem' } }}>
                                Add Links
                            </Typography>

                            <TextField
                                fullWidth
                                label="Link Label"
                                variant="outlined"
                                value={newLinkLabel}
                                onChange={(e) => setNewLinkLabel(e.target.value)}
                                sx={{ marginBottom: '10px', backgroundColor: '#202225', borderRadius: 1 }}
                                InputLabelProps={{ style: { color: '#99AAB5' } }}
                                inputProps={{ style: { color: '#FFFFFF', fontSize: '0.9rem' } }}
                            />
                            <TextField
                                fullWidth
                                label="Link URL"
                                variant="outlined"
                                value={newLinkUrl}
                                onChange={(e) => setNewLinkUrl(e.target.value)}
                                sx={{ marginBottom: '10px', backgroundColor: '#202225', borderRadius: 1 }}
                                InputLabelProps={{ style: { color: '#99AAB5' } }}
                                inputProps={{ style: { color: '#FFFFFF', fontSize: '0.9rem' } }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#7289DA',
                                    textTransform: 'none',
                                    '&:hover': { backgroundColor: '#4752C4' },
                                    marginBottom: '20px',
                                    borderRadius: 1,
                                    fontSize: { xs: '0.85rem', md: '1rem' }
                                }}
                                onClick={handleAddLink}
                            >
                                Add Link
                            </Button>

                            <List sx={{ marginBottom: '20px', maxHeight: { xs: 150, md: 200 }, overflow: 'auto' }}>
                                {links.map((link, index) => (
                                    <ListItem
                                        key={index}
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveLink(index)}>
                                                <DeleteIcon sx={{ color: '#FFFFFF' }} />
                                            </IconButton>
                                        }
                                        sx={{ color: '#99AAB5', fontSize: '0.9rem' }}
                                    >
                                        {link.label} - {link.url}
                                    </ListItem>
                                ))}
                            </List>

                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#7289DA',
                                    textTransform: 'none',
                                    '&:hover': { backgroundColor: '#4752C4' },
                                    width: '100%',
                                    padding: '12px 0',
                                    borderRadius: 1,
                                    fontSize: { xs: '0.9rem', md: '1rem' }
                                }}
                                onClick={handleSave}
                                disabled={saving}
                            >
                                {saving ? "Saving..." : "Save Page"}
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper
                            sx={{
                                padding: { xs: 2, md: 4 },
                                backgroundColor: '#161B22',
                                borderRadius: 4,
                                overflow: 'hidden'
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    marginBottom: '20px',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    fontSize: { xs: '1.3rem', md: '1.5rem' }
                                }}
                            >
                                Live Preview
                            </Typography>
                            <TemplateManager templateId={templateId} pageData={pageData} />
                        </Paper>
                    </Grid>
                </Grid>
            )}
        </Box>
    );
};

export default DashboardPage;
