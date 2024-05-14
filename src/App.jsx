import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./assets/accioLogo.svg";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import PageNotFound from "./components/404/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
