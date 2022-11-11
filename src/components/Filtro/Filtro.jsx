import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardDiscography } from '../CardDiscography';

const Filtro = () => {
  const { category } = useSelector((state) => state);
  const urlApi = process.env.REACT_APP_URL;

  const [products, setProducts] = useState();

  const filtrarProductos = async (url) => {
      const datos = await axios.get(url);
      console.log(datos)
    setProducts(datos);
  };
    useEffect(() => {
      console.log('actualizo')
    filtrarProductos(`${urlApi}/products/disc/${category}`);
  }, [category]);
    console.log(category)
  return (
    <>
      <div className="container text-center mt-5">
        <div className="row">
          {!products ? (
            <div>sdasdfsd</div>
          ) : (
            products?.data?.discs.map((product) => (
              <div key={product.id} className="col-3">
                <CardDiscography key={product.id} dateDiscography={product} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Filtro;
