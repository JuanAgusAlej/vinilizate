import { useReducer } from "react";
import ProductItem from "./ProductItem";
import { shoppingInitialState, shoppingReducer } from "./shoppingReducer";
import styles from "./shoppingCart.module.css"
import { CartItem } from "./CartItem";
import { TYPES } from "./shoppingAction";

export function ShoppingCart() {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const {products, cart} = state;
  const addToCart = (id) => {
        dispatch({type: TYPES.ADD_TO_CART, payload: id})
  };
  const delFromCart = (id, all= false) => {
    console.log(id,all);
    if(all) {
      dispatch({type:TYPES.REMOVE_ALL_FROM_CART, payload:id})
    } else {
      dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload:id})
    }

  };
  const clearCart = () => {
    dispatch({type: TYPES.CLEAR_CART})
  };
  return (
    <div>
      <h2>Carrito de compras</h2>
      <h3>Productos</h3>
      <article className={styles.box}>
        {products.map((product)=> (<ProductItem key={product.id} data={product} addToCart={addToCart}/>))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        <div className={styles.box}>
        {
          cart.map((item,index)=> <CartItem key={index} data={item} delFromCart={delFromCart}/>)
        }
        </div>
      </article>
    </div>
  );
}
