import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Maps from './pages/Map/Maps';
import Main from './pages/Main/Main';
import Outfits from './pages/Outfits/Outfits';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/outfit" element={<Outfits />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
