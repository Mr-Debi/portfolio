import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./Admin";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/portfolio" element={<App />} />

      <Route path="/portfolio/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>,
);