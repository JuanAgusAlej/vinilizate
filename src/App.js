import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import GridProducts from "./pages/GridProducts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetalle from "./pages/ProductDetalle/ProductDetalle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<GridProducts />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id" element={<ProductDetalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
