import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <div className='menu'>
            <p>Budo Shop</p>
            <p>Enlace 1</p>
            <p>Enlace 2</p>
            <p>Enlace 3</p>
            <CartWidget/>
        </div>
    )
}

export default NavBar

