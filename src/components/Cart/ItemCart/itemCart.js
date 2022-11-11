import axios from "axios";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, deleteItemToCart } from "../../../app/shoppingCart";
import styles from "./styles.module.scss"



const ItemCart = ({ item }) => {
    const dispatch = useDispatch();
    const urlApi = "http://localhost:8080/api";
    const { user, cart } = useSelector((state) => state);
    const addItemCart = (id) => {
        dispatch(addItemToCart(item))
        const cant = item.cantidad + 1

        axios

            .put(`${urlApi}/cart/${user.id}/${id}`, { cantidad: cant })
            .then((res) => console.log(res));
        ;
    };
    const removeItemCart = (id) => {
        dispatch(deleteItemToCart(item))
        const cant = item.cantidad - 1
        if (cant > 0) {
            axios

                .put(`${urlApi}/cart/${user.id}/${id}`, { cantidad: cant })
                .then((res) => console.log(res));
            ;
        } else {
            axios.delete(`${urlApi}/cart/${user.id}/${id}`)
                .then((res) => console.log(res));
        }
    };


    return (
        <div className={styles.cartItem}>
            <img src={item.img} alt={item.name} />
            <div className={styles.dataContainer}>
                <div className={styles.left}>
                    <p> {item.name}  ${item.price} * {item.cantidad} = </p>
                    <div className={styles.buttons}>
                        <button onClick={() => addItemCart(item.id)}>Agregar</button>
                        <button onClick={() => removeItemCart(item.id)}>Sacar</button>
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