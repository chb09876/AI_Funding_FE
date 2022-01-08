import React from "react";
import test1 from "./pages/test1";
import test2 from "./pages/test2";
import test3 from "./pages/test3";
import test4 from "./pages/test4";
import test5 from "./pages/test5";
import { Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="*" element={test1} />
        <Route path="/second" element={test2} />
        <Route path="/third" element={test3} />
        <Route path="/forth" element={test4} />
        <Route path="/fifth" element={test5} />
      </Routes>
    </div>
  );
}

export default App;
