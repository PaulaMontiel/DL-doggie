import React from 'react';
import MyProductContext from "./product_context"
import MyTotalAmountContext from "./total_amount_context"
import CartContext from "./cart_context"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./views/Home.jsx";
import Gallery from "./views/gallery.jsx";
import Product from "./views/Product.jsx";
import Carrito from "./views/Carrito.jsx";
import Login from "./views/Login.jsx";
import UserRegistration from "./views/UserRegistration.jsx";
import UserVsSeller from "./views/UserVsSeller.jsx";
import './App.css';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const endpoint = '/front-dog-shp/product.json';
  const [cost, setCost] = useState(0);

  const consultarInformacion = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    consultarInformacion();
  }, [])

  return (
    <div className="App">
      <MyProductContext.Provider value={{ products, setProducts }}>
        <MyTotalAmountContext.Provider value={{ cost, setCost }}>
        <CartContext.Provider value={{ cart, setCart }}>
          <BrowserRouter basename='front-dog-shp'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/userRegistration" element={<UserRegistration/>} />
              <Route path="/UserVsSeller" element={<UserVsSeller/>} />
            </Routes>
          </BrowserRouter>
          </CartContext.Provider>
        </MyTotalAmountContext.Provider>
      </MyProductContext.Provider>
    </div>
  );
}

export default App;
