import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Products from "./components/products/Product";
import Contact from "./components/contact/Contact";
import ScrollToTop from "./components/ScrollTop";
import React from "react";
import NotFound from "./components/notfound/NoteFound";
import { Nav } from "./components/navbar/Navbar2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="isolate bg-white  ">
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
