import React from 'react';
import { CardGroup } from 'react-bootstrap';
import { CardDiscography } from '../../components/CardDiscography';
import CardProduct from '../../components/CardProduct/CardProduct';
import './productDetalle.css';

const ProductDetalle = () => {
  const dato = {
    price: 45,
    img: 'https://cdn.shopify.com/s/files/1/0576/8616/3620/products/00042283814127_1024x.jpg?v=1635790052',
    title: 'Master of Puppets',
    voto: 5,
  };
  const datesDiscography = [
    {
      title: 'ride the lightning',
      img: 'https://www.todorock.com/wp-content/uploads/2019/06/metallica-ride-the-lightning.jpg',
      price: 50,
    },
    {
      title: 'Kill em all',
      img: 'https://www.todorock.com/wp-content/uploads/2019/06/metallica-kill-em-all.jpg',
      price: 50,
    },
    {
      title: '...And Justice For All',
      img: 'https://www.futuro.cl/wp-content/uploads/2019/06/Metallica-...And-Justice-For-All.jpeg',
      price: 50,
    },
    {
      title: 'Death Magnetic',
      img: 'https://garajedelrock.com/wp-content/uploads/2020/09/Death-Magnetic.jpg',
      price: 50,
    },
    {
      title: 'Metallica',
      img: 'https://www.spirit-of-metal.com/cover.php?id_album=624',
      price: 50,
    },
  ];
  return (
    <>
      <CardProduct dato={dato} />
      <div className="discography">Discografias</div>

      <div className="row">
        {datesDiscography.map((dateDiscography, i) => (
          <div className="col">
            <CardDiscography key={i} dateDiscography={dateDiscography} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetalle;
