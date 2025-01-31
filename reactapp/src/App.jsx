import React from "react";
import HP from "./component/HP.jsx";
import { Route, Routes } from "react-router-dom";
import Register from "./component/Register.jsx";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HP />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
