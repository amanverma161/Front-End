import React from "react";
import HP from "./component/HP.jsx";
import { Route, Routes } from "react-router-dom";
import Register from "./component/Register.jsx";
import Dashboard from "./component/Dashboard.jsx";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HP />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
