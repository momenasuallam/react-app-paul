import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Favourites from "./pages/Favourites";
import Faq from "./pages/Faq";
import MyAccount from "./pages/MyAccount";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="my-account" element={<MyAccount />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="faq" element={<Faq />} />
      </Routes>
    </div>
  );
}

export default App;
