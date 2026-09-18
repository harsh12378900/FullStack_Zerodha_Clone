import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./component/Home";
import { GeneralContextProvider } from "./component/GeneralContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GeneralContextProvider>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </GeneralContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);