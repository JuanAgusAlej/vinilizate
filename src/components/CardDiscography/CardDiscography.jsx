import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItemToCart } from "../../app/shoppingCart";
import "./cardDiscography.css";

const CardDiscography = ({ dateDiscography }) => {
  const dispatch = useDispatch();
  const urlApi = "http://localhost:8080/api";
  const { user, cart } = useSelector((state) => state);
  const addProduct = (id) => {
    const total = cart.find((item) => item.id === id);
    dispatch(addItemToCart(dateDiscography));
    console.log(total);
    if (!total) { 
      axios
      .post(`${urlApi}/cart/${user.id}/${id}`)
      .then((res) => console.log(res));
    }else{
      axios
      .put(`${urlApi}/cart/${user.id}/${id}`, { cantidad: total.cantidad +1 })
      .then((res) => console.log(res));
    }

   
  };
  return (
    <Card className="boxDiscography">
      <Card.Img className="imgDiscography" src={dateDiscography.img} />
      <Card.Body className="text-center bodyDiscography">
        <Card.Title className="titleDiscography link">
          <Link to={`/${dateDiscography.id}`}>{dateDiscography.name}</Link>
        </Card.Title>
        <Card.Text className="priceDiscography">{`$${dateDiscography.price}`}</Card.Text>
        <Button
          variant="success"
          className="btn-cart"
          onClick={() => addProduct(dateDiscography.id)}
        >
          <i className="bi bi-cart-plus"></i>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardDiscography;
