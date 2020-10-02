import 'react-calendar-heatmap/dist/styles.css';

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Profile from './pages/Profile';
import Repo from './pages/Repo';
import Footer from './components/Footer';

import { ThemeName, themes } from './styles/themes';
 
function App() {
  const [themeName, setThemeName] = useState<ThemeName>('light');
  const currentTheme = themes[themeName];

  return (
   <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header themeName={themeName} setThemeName={setThemeName} />

        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/:reponame" element={<Repo />} />
        </Routes>

        <Footer />

        <GlobalStyle />
    </BrowserRouter>
   </ThemeProvider>
  );
}

export default App;
