import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#7289DA', // Primary color
            contrastText: '#FFFFFF', // Text color for primary buttons
        },
        secondary: {
            main: '#5865F2', // Secondary color
        },
        background: {
            default: '#0D1117', // App background
            paper: '#161B22', // Card background
        },
        text: {
            primary: '#FFFFFF', // Primary text
            secondary: '#99AAB5', // Secondary text
            error: '#FF5555', // Error text
        },
        success: {
            main: '#00C853', // Success messages or indicators
        },
        warning: {
            main: '#FF9800', // Warnings
        },
    },
    typography: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        body1: {
            fontSize: '1rem',
            color: '#99AAB5',
        },
    },
});

export default theme;
