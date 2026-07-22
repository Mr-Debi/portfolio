import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./Admin";


ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter basename="/portfolio">
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
    </Routes>
</BrowserRouter>
);