import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CartPage from "./components/CartPage";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cartpage" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
