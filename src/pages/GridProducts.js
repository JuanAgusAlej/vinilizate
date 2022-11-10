import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { CardDiscography } from "../components/CardDiscography";
import { fakeData } from '../hooks/seed';
import useFetch from '../hooks/useFetch';

const GridProducts = () => {
  // const [products, setProducts] = useState(fakeData);
  const location = useLocation();
  console.log(location);
  const urlApi = process.env.REACT_APP_URL;
  const url = location.pathname.includes('category')
    ? `${urlApi}/genre/`
    : `${urlApi}/products/`;
  const products = useFetch(url);
  console.log(url);
  console.log(products);
  /* const fetchProducts = async () => {
    const {
      data: { results },
    } = await axios.get("/products");
    console.log(results);
    setProducts(results);
  };
*/
  useEffect(() => {
    console.log(url);
  }, [url]);

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
