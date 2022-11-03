import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
 import {ShoppingCart} from "./components/ShoppingCart/ShoppingCart"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={""} />
        <Route path="/shoppingCart" element={<ShoppingCart/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
