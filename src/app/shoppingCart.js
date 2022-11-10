import { createAction, createReducer } from '@reduxjs/toolkit';

export const addItemToCart = createAction("ADD_CART")
export const deleteItemToCart = createAction("DELETE_ITEM")

const productos = []
export const cartReducer = createReducer(productos, {

    [addItemToCart]: (state, action) => {
        const inCart = state.find(
            (product) => product.id === action.payload.id
        );
        if (!inCart) {
            const dato = {
                id: action.payload.id,
                name: action.payload.name,
                img: action.payload.img,
                price: action.payload.price,
                cantidad: 1
            }
            state.push(dato)
        } else {
            inCart.cantidad++

        }
    },

    [deleteItemToCart]: (state, action) => {
        const inCart = state.find(
            (product) => product.id === action.payload.id
        );
        if (inCart.cantidad === 1) {

            const data = state.filter((productInCart) => productInCart.id !== inCart.id)
            return state = data
        } else {
            inCart.cantidad--

        }
    }
}
);


