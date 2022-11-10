import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart, deleteItemToCart } from "../../../app/shoppingCart";
import styles from "./styles.module.scss"

const ItemCart = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <div className={styles.cartItem}>
            <img src={item.img} alt={item.name} />
            <div className={styles.dataContainer}>
                <div className={styles.left}>
                    <p> {item.name}  ${item.price} * {item.cantidad} = </p>
                    <div className={styles.buttons}>
                        <button onClick={() => dispatch(addItemToCart(item))}>Agregar</button>
                        <button onClick={() => dispatch(deleteItemToCart(item))}>Sacar</button>
                    </div>
                </div>
                <div className={styles.right}>
                    <div>
                        {item.cantidad}
                    </div>
                    <p>Total: {item.cantidad * item.price}</p>
                </div>
            </div>
        </div>
    )
}
export default ItemCart