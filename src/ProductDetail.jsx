import React from 'react'
import { useDispatch } from 'react-redux'
import { increase } from './redux/reducres/cartSilce';

const ProductDetail = () => {
    const dispath = useDispatch();
    const updateQty = () => {
        dispath(increase(2))
    }
    return (
        <>
            <div>ProductDetail</div>
            <button>-</button>
            <input />
            <button onClick={updateQty}>+</button>
        </>
    )
}

export default ProductDetail