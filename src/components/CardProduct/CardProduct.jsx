import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cardProduct.css';
import { RankedStar } from '../Ranked';
import { armar } from '../../hooks/armarStar';
import { useSelector } from 'react-redux';
const CardProduct = ({ dato }) => {
  const [star, setStar] = useState(armar(dato.voto));
  const { user } = useSelector((state) => state);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setStar(armar(dato.voto));
  }, [dato.voto]);

  const addFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <>
      <Container className="conteiner">
        <Row>
          <Col>
            <Card.Img
              className="imgProduct"
              style={{ marginTop: 15 }}
              src={dato.img}
            />{' '}
          </Col>
          <Col className="d-flex">
            <Col className="d-flex align-items-center">
              <Card.Body className="text-center" style={{ marginBottom: 10 }}>
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
              <button
                onClick={() => {
                  addFavorite();
                }}>
                <i className={!favorite ? `bi bi-heart` : 'bi-heart-fill'}></i>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CardProduct;
