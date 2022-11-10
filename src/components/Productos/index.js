import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../app/shoppingCart";
import { fakeData } from "../../hooks/seed"
import styles from "./styles.module.scss"

const Products = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.productsContainer}>
      {fakeData.map((product, i) => (
        <div key={i} className={styles.product}>
          <img src={product.img} alt={product.name} />
          <div>
            <p>
              {product.name} - ${product.price}
            </p>
          </div>
          {!product.inCart ? (
            <button onClick={() => dispatch(addItemToCart(product))}>
              Agregar al Carrito
            </button>
          ) : (
            <button>En el carrito</button>
          )}
        </div>
      ))}

    </div>

  )
}
export default Products