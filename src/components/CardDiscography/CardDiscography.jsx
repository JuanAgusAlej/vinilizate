import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './cardDiscography.css';
const CardDiscography = ({ dateDiscography }) => {
  const navigate = useNavigate();
  const handleClik = (dato) => {
    console.log(dato);
    navigate(`/${dato.id}`);
  };
  return (
    <Card
      className="boxDiscography"
      onClick={() => handleClik(dateDiscography)}>
      <Card.Img className="imgDiscography" src={dateDiscography.img} />
      <Card.Body className="text-center bodyDiscography">
        <Card.Title className="titleDiscography">
          {dateDiscography.name}
        </Card.Title>
        <Card.Text className="priceDiscography">{`$${dateDiscography.price}`}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardDiscography;
