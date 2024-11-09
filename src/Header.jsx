import React from 'react'
import Cart from './Cart'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                background: 'red', padding: '15px',
                color: 'white'
            }}>
                <div>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/category"}>Category</NavLink>
                </div>
                <Cart />
            </div>
        </>

    )
}

export default Header