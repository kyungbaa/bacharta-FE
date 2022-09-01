import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/pages/Main/Main";
import Login from "./components/Login/Login";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
