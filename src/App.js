import "./App.css";
import {useEffect, useState} from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Partner from "./Pages/Partner";
import Catalog from "./Pages/Catalog";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Recovery from "./Pages/Recovery";
import Product from "./Pages/Product";
import Cart from "./Components/Cart";
import Faq from "./Pages/Faq";
import Checkout from "./Pages/Checkout";
import Account from "./Pages/Account";
import Thank from "./Pages/Thank";
import Policy from "./Pages/Policy";
import Care from "./Pages/Care";
import Return from "./Pages/Return";
import Terms from "./Pages/Terms";
import Payment from "./Pages/Payment";
import NotFound from "./Pages/NotFound";
import MnuMobile from "./Components/MnuMobile";
import SearchMobile from "./Components/SearchMobile";
import { useSelector } from "react-redux";

import { ToastContainer, toast } from 'react-toastify';

function App() {
  const location = useLocation();
  const mobMnu = useSelector(state=>state.user.mobMnu);
  const searchMob = useSelector(state=>state.user.searchMob);

 
  const showCardPopup = useSelector(state=>state.card.showCardPopup)
  return (
    <div className="App">
      <Header />
      <div className="layout">
      {showCardPopup &&  <Cart popup={true} /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/partnership" element={<Partner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:cat" element={<Catalog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account" element={<Account />} />
        <Route path="/thank" element={<Thank />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/care" element={<Care />} />
        <Route path="/return" element={<Return />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      

      {location.pathname !== "/thank" ?  <Footer /> : ''}
     
      {mobMnu && <MnuMobile />}
      {searchMob && <SearchMobile />}
      <ToastContainer />
    </div>
  );
}

export default App;
