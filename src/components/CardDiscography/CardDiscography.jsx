import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cardDiscography.css'
const CardDiscography = ({dateDiscography}) => {
  return (
    <Card className='boxDiscography'>
      <Card.Img className='imgDiscography' src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=guFplHEU" />
      <Card.Body className='text-center bodyDiscography'>
              <Card.Title className='titleDiscography'>{dateDiscography.title}</Card.Title>
        <Card.Text className='priceDiscography'>{`$${dateDiscography.price}`}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardDiscography;
