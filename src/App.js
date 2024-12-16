import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/DashboardPage";
import NoPage from "./Pages/NoPage";
import './App.css';

function App() {
  return (
      <div className='app'>
          <AuthProvider>
              <BrowserRouter>
                  <Routes>
                      <Route index element={<LandingPage />} />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/dashboard" element={<DashboardPage />} />
                      <Route path="*" element={<NoPage />} />
                  </Routes>
              </BrowserRouter>
          </AuthProvider>
      </div>
  );
}

export default App;
