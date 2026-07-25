// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App";

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Admin from "./Admin";

// // for localhost
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter basename="/portfolio">
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/admin" element={<Admin />} />
//     </Routes>
//   </BrowserRouter>,
// );


// for vercel
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/admin" element={<Admin />} />
//     </Routes>
//   </BrowserRouter>,
// );








import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./App";

import Admin from "./Admin";

import AdminLogin from "./AdminLogin";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/admin" replace />;
}

// for vercel
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />

//       <Route path="/admin" element={<AdminLogin />} />

//       <Route
//         path="/admin/dashboard"
//         element={
//           <PrivateRoute>
//             <Admin />
//           </PrivateRoute>
//         }
//       />
//     </Routes>
//   </BrowserRouter>,
// );


// for localhost
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/portfolio">
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/admin" element={<AdminLogin />} />

      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>,
);