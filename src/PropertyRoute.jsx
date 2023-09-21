import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function PropertyRoute() {
  return (
    <div>
      <h1>Property App</h1>
      <ul>
        <li>
          <Link to="/properties/1">property list</Link>
        </li>
      </ul>
      <Routes>
        <Route
          index
          element={<>This route available only in development mode</>}
        />
        <Route path="1" element={<h1>hi</h1>} />
      </Routes>
    </div>
  );
}
