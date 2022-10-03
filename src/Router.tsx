import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Maps from './pages/Map/Maps';
import Main from './pages/Main/Main';
import Outfits from './pages/Outfits/Outfits';
import Nav from './components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/outfit" element={<Outfits />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
