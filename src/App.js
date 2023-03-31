import React from 'react';
import MyProductContext from "./producto_context";
import MyTotalAmountContext from "./total_amount_context";
import CartContext from "./cart_context";
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
import 'alertifyjs/build/css/alertify.css';

function App() {


  const [cart, setCart] = useState([]);
  // const endpoint = '/front-dog-shp/product.json';
  const [cost, setCost] = useState(0);
  // Data for Products
  const [products, setProducts] = useState([]);
  // Data for Users
  const [users, setUsers] = useState([]);

  // Data for Posts
  const [vendedores, setVendedores] = useState([]);
  // const endpoint ='https://backmarketdb.fly.dev/productos/listado'




  // const array = [

  //     fetch('https://backmarketdb.fly.dev/usuario/listado'),
  //     fetch('https://backmarketdb.fly.dev/productos/listado'),
  //     fetch('https://backmarketdb.fly.dev/vendedor/mostrar'),

  const array = [

    fetch('https://backmarketdb.fly.dev/usuario/listado'),
    fetch('https://backmarketdb.fly.dev/productos/listado'),
    fetch('https://backmarketdb.fly.dev/vendedor/mostrar')
  ]

  async function makeRequests() {
    try {
      const responses = await Promise.allSettled(array);
      // Handles array of fetch requests with Promise.allSettled()

      const successArray = [];
      responses.map(response => {
        if (response.status === "fulfilled") {
          successArray.push(response);
        }
      })
      // Pushes only successfully fulfilled responses into successArray

      const data = await Promise.allSettled(successArray.map(response => response.value.json()))
      // Reads readable stream on body of responses in successArray to JS object (from JSON)

      data.forEach(obj => console.log(obj.value))
      setProducts(data[1]);
      // Logs values on objects (return values of successful fetches)
      // Array(100) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
      // Array(5000) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]

    } catch {
      console.error("Multiple fetch failed");
    }
  }

  // const consultarInformacion = async () => {
  //   const response = await fetch(endpoint);
  //   const data = await response.json();
  //   setProducts(data);
  // };

  useEffect(() => {
    //   consultarInformacion();
    makeRequests();
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
                <Route path="/login" element={<Login />} />
                <Route path="/userRegistration" element={<UserRegistration />} />
                <Route path="/UserVsSeller" element={<UserVsSeller />} />
              </Routes>
            </BrowserRouter>
          </CartContext.Provider>
        </MyTotalAmountContext.Provider>
      </MyProductContext.Provider>
    </div>
  );
}

export default App;
