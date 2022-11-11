import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import GridProducts from "./pages/GridProducts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetalle from "./pages/ProductDetalle/ProductDetalle";

import Checkout from "./pages/Checkout";

import { Navbar } from './components/Navbar';
import Cart from "./components/Cart/Cart";
import { PagesAdmin } from "./pages/PagesAdmin";


function App() {
  return (
    <BrowserRouter>
      <div className="row">
        <div className="col-2">
          <Navbar />
        </div>
        <div className="col-8">
          <Routes>
            <Route path="/" index element={<GridProducts />} />
            <Route path="/category/:id" element={<GridProducts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/:id" element={<ProductDetalle />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin" element={<PagesAdmin />} />
          </Routes>
        </div>
        <div className="col-2">
        <Cart />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
