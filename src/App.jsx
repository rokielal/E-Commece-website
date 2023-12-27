import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path = '/' element={<Home/>}></Route>
          <Route path = '/checkout' element={<Checkout/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
