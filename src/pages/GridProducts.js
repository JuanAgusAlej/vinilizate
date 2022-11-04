import axios from "axios";
import { useState, useEffect } from "react";
import { fakeData } from '../hooks/seed';


const GridProducts = () => {
  const [products, setProducts] = useState(fakeData);
  
  
  /* const fetchProducts = async () => {
    const {
      data: { results },
    } = await axios.get("/products");
    console.log(results);
    setProducts(results);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

   */
  

  return (
    <>
      <div className="container text-center mt-5">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-sm-4">
              <img
                src={product.img}
                height={600}
                width="100%"
              />
              <h4>{product.name}</h4>
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GridProducts