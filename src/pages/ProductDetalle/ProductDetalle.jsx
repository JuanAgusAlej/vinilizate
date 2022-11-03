import React from 'react';
import { CardGroup, Col, Row } from 'react-bootstrap';
import { CardDiscography } from '../../components/CardDiscography';
import CardProduct from '../../components/CardProduct/CardProduct';
import './productDetalle.css';

const ProductDetalle = () => {
  const dato = {
    price: 45,
    title: 'fgfg',
    voto: 5,
  };
  const datesDiscography = [
    {
      title: 'asdas',
      price: 50,
    },
    {
      title: 'asdas',
      price: 50,
    },
    {
      title: 'asdas',
      price: 50,
    },
    {
      title: 'asdas',
      price: 50,
    },
    {
      title: 'asdas',
      price: 50,
    },
  ];
  return (
    <>
      <CardProduct dato={dato} />
      <div className="discography">Discografias</div>

      <CardGroup>
        {datesDiscography.map((dateDiscography, i) => (
          <CardDiscography key={i} dateDiscography={dateDiscography} />
        ))}
      </CardGroup>
    </>
  );
};

export default ProductDetalle;
