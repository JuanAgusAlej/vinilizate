import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import GridProducts from "./pages/GridProducts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetalle from "./pages/ProductDetalle/ProductDetalle";

import Checkout from "./pages/Checkout";

import { Navbar } from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div class="row">
        <div class="col-2">
          <Navbar />
        </div>
        <div class="col-8">
          <Routes>
            <Route path="/" index element={<GridProducts />} />
            <Route path="/category/:id" index element={<GridProducts />} />
            <Route path="/shoppingCart" element={<ShoppingCart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/:id" element={<ProductDetalle />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
        <div class="col-2"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
