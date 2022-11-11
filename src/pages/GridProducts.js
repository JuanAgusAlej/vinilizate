import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { categorySelected } from '../app/category';
import { CardDiscography } from '../components/CardDiscography';
import useFetch from '../hooks/useFetch';

const GridProducts = () => {
  // const [products, setProducts] = useState(fakeData);
  const location = useLocation();
  console.log(location);
  const urlApi = process.env.REACT_APP_URL;
  const url = `${urlApi}/products/`
  const products = useFetch(url);

  return (
    <>
      <div className="container text-center mt-5">
        <div className="row">
          {products.loading ? (
            <div>sdasdfsd</div>
          ) : (
              
            products?.data.map((product) => (
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

export default GridProducts;
