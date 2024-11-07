import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartQty = useSelector((state) => {
        console.log(state.cart.value);
        return state.cart.value;
    })
    return (
        <div>Cart ({cartQty}) </div>
    )
}

export default Cart