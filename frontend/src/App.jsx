import { BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Create from './pages/Create';
import Update from "./pages/Update";
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import ProtectedRoutes from "./components/ProtectedRoutes";
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/produtos/:id" element={<ProductDetails/>} />
          <Route path="/login" element={<Login/>} />

          <Route element={<ProtectedRoutes/>}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update/:id" element={<Update />} />
          </Route>
        
        </Routes>
      </div>
    </div>
    <Footer/>
  </BrowserRouter >
  );
}


export default App
