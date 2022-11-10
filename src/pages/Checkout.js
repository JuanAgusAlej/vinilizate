import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { shoppingInitialState } from "../components/ShoppingCart/shoppingReducer";
import "./styles/checkout.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate;
  const [cartItems, setCartItems] = useState([shoppingInitialState]);

  const products = cartItems[0].products;

  const itemsPrice = products.reduce((acc, c) => acc + 1 * c.price, 0);

  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + shippingPrice;
  /* if (!localStorage.getItem("token")) {
    navigate("/login");
    swal({
      title: " Error ",
      text: " Login to go to Shopping Cart Page !! ",
      icon: "error",
      button: "OK",
    });
  } */

  return !products ? (
    "The Cart is Empty"
  ) : (
    <div className="container">
      <h1>Checkout</h1>
      <table className="table table-dark align-middle">
        <thead>
          <tr>
            <th scope="col" className="col">
              Quantity
            </th>
            <th scope="col" className="col">
              Description
            </th>

            <th scope="col" className="col">
              Price
            </th>
            <th scope="col" className="col">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id} className="table">
              <td>1</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{1 * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total">
        <h6>Shipping Price</h6>
        <strong>{shippingPrice}</strong>
      </div>

      <div className="total">
        <h4>Total Price</h4>
        <strong>{totalPrice}</strong>
        <Link to="/" className="btn btn-primary btn-sm">
          Complete Order
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
