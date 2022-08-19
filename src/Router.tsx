import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
<<<<<<< HEAD
import Maps from './pages/Map/Maps';
import Login from './components/Login/Login';
import Outfits from './pages/Outfits/Outfits';
import Nav from './components/Nav/Nav';
=======
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
>>>>>>> a73ffa2 (comflict goruf)

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="login" element={<Login />} />
        <Route path="outfits" element={<Outfits />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
