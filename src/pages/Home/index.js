import React from "react";

import Products from "../../components/Productos";
import Cart from "../../components/Cart/Cart";
import styles from "./home.module.scss"

const Home = () => {
    return (
        <div className={styles.home}>
           
            <Products />
        </div>
    )
}
export default Home