import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import Home from './tabs/home/Home';
import AboutMe from './tabs/about/AboutMe';
import Games from './tabs/games/Games';
import FullStack from './tabs/full-stack/FullStack';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main style={{ padding: 24, maxWidth: 960, margin: '0 auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/games" element={<Games />} />
            <Route path="/web" element={<FullStack />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </ThemeProvider>
    </BrowserRouter>
  );
}
