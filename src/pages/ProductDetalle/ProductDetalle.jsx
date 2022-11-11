import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { CardDiscography } from '../../components/CardDiscography';
import CardProduct from '../../components/CardProduct/CardProduct';
import useFetch from '../../hooks/useFetch';
import './productDetalle.css';

const ProductDetalle = () => {
  const { id } = useParams();
  const urlApi = process.env.REACT_APP_URL;
  const [extras, setExtras] = useState();

  const disco = useFetch(`${urlApi}/products/${id}`);
  const extraGet = async (url) => {
    const { data } = await axios(url);
    const datos = data.discs.slice(0, 4);
    setExtras(datos);
  };
  console.log(disco)
  useEffect(() => {
    if (disco.data) {
      extraGet(`${urlApi}/products/disc/${disco.data.genreId}`);
    }
  }, [disco.loading]);

  
  return (
    <>
      {!disco.data    ? <p>Loguin</p> : <CardProduct dato={disco.data} />}
      <div className="discography">Discografias</div>

      <div className="row">
        {extras?.map((extra) => (
          <div className="col">
            <CardDiscography key={extra.id} dateDiscography={extra} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetalle;
