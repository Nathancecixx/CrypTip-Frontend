import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from "./Pages/LandingPage";
import NoPage from "./Pages/NoPage";
import './App.css';

function App() {
  return (
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
