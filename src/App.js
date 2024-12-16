// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ConnectionProvider, WalletProvider, useWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/DashboardPage";
import TipPage from "./Pages/TipPage";
import NoPage from "./Pages/NoPage";

import { AuthProvider } from './AuthContext';
import SolanaWallet from './WalletAdaptors/SolonaWallet';

require('@solana/wallet-adapter-react-ui/styles.css'); // Default styles

// We create a small wrapper component to access `useWallet()` so we can
// pass it to the SolanaWallet class.
function AuthWrapper({ children }) {
    const solanaWalletHook = useWallet();
    const solanaWallet = new SolanaWallet(solanaWalletHook);

    return (
        <AuthProvider wallet={solanaWallet}>
            {children}
        </AuthProvider>
    );
}

function App() {
    const wallets = [new PhantomWalletAdapter()];

    return (
        <ConnectionProvider endpoint="https://api.devnet.solana.com">
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <AuthWrapper>
                        <BrowserRouter>
                            <Routes>
                                <Route index element={<LandingPage />} />
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/dashboard" element={<DashboardPage />} />
                                <Route path="/:pageId" element={<TipPage/>} />
                                <Route path="*" element={<NoPage />} />
                            </Routes>
                        </BrowserRouter>
                    </AuthWrapper>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default App;
