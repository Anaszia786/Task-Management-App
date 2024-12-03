import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./Todo";
import Navbar from "./common/navbar";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
