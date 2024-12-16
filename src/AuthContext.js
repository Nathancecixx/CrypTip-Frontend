// src/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children, wallet }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = async () => {
        // Ensure the wallet is connected
        await wallet.connect();

        const publicKey = wallet.getPublicKey();
        if (!publicKey) {
            throw new Error('No public key found. Please connect your wallet.');
        }

        // Simulate a challenge message
        const challenge = new TextEncoder().encode('Sign this message to authenticate');

        // Sign the challenge
        const signature = await wallet.signMessage(challenge);

        // In a real-world scenario, you’d send `publicKey` and `signature` to your server.
        // If the server verifies the signature, it would return a token or session.
        // For this example, we’ll trust the signed message as proof of ownership.

        setIsAuthenticated(true);
    };

    const logout = async () => {
        await wallet.disconnect();
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
