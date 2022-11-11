import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemToCart } from '../../app/shoppingCart';
import './cardDiscography.css';
const CardDiscography = ({ dateDiscography }) => {
  const dispatch = useDispatch();
 
  return (
    <Card className="boxDiscography">
      <Card.Img className="imgDiscography" src={dateDiscography.img} />
      <Card.Body className="text-center bodyDiscography">
        <Card.Title className="titleDiscography link">
          <Link to={`/${dateDiscography.id}`}>{dateDiscography.name}</Link>
        </Card.Title>
        <Card.Text className="priceDiscography">{`$${dateDiscography.price}`}</Card.Text>
        <Button variant="success" className="btn-cart" onClick={() => dispatch(addItemToCart(dateDiscography))}><i className="bi bi-cart-plus"></i></Button>
      </Card.Body>
    </Card>
  );
};

export default CardDiscography;
