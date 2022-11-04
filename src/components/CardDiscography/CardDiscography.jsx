import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cardDiscography.css'
const CardDiscography = ({dateDiscography}) => {
  return (
    <Card className='boxDiscography'>
      <Card.Img className='imgDiscography' src={dateDiscography.img} />
      <Card.Body className='text-center bodyDiscography'>
              <Card.Title className='titleDiscography'>{dateDiscography.title}</Card.Title>
        <Card.Text className='priceDiscography'>{`$${dateDiscography.price}`}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardDiscography;
