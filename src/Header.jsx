import React from 'react'
import Cart from './Cart'

const Header = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                background: 'red', padding: '15px',
                color: 'white'
            }}>
                <div>Header</div>
                <Cart />
            </div>
        </>

    )
}

export default Header