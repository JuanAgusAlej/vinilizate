import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cardProduct.css';
import { RankedStar } from '../Ranked';
import { armar } from '../../hooks/armarStar';
const CardProduct = ({ dato }) => {
  const [star, setStar] = useState(armar(dato.voto));
  const [heart, setHeart] = useState('bi-heart');

  useEffect(() => {
    setStar(armar(dato.voto));
  }, [dato.voto]);

  return (
    <>
      <Container className="conteiner">
        <Row>
          <Col style={{ padding: 0 }}>
            {' '}
            <Card.Img
              className="imgProduct"
              variant="top"
              src="holder.js/100px180"
            />{' '}
          </Col>
          <Col className="d-flex" style={{ padding: 0 }}>
            <Col className="d-flex align-items-center">
              <Card.Body className="text-center">
                <Card.Title className="titleProduct">{dato.title}</Card.Title>
                <Card.Subtitle className="artistaProduct">
                  Card Title
                </Card.Subtitle>
                <Card.Text className="priceProduct">{`$${dato.price}`}</Card.Text>
                {star?.map((dato, i) => (
                  <RankedStar key={i} star={dato} />
                ))}
              </Card.Body>
            </Col>
            <div>
              <button>
                <i class={`bi ${heart}`}></i>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CardProduct;
