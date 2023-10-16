import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Catalog from "./Pages/Catalog";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Product from "./Pages/Product";
import Cart from "./Components/Cart";
import Faq from "./Pages/Faq";
import Checkout from "./Pages/Checkout";
import Account from "./Pages/Account";
import { useSelector } from "react-redux";

function App() {
  const showCardPopup = useSelector(state=>state.card.showCardPopup)
  return (
    <div className="App">
      <Header />
      <div className="layout">
      {showCardPopup &&  <Cart popup={true} /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:cat" element={<Catalog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account" element={<Account />} />
        {/* <Route path="/list" element={<List />} />
        <Route path="/offer/:id" element={<Offer />} /> */}
      </Routes>
      </div>
      

      <Footer />
    </div>
  );
}

export default App;
