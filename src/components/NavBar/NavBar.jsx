import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        
        <nav className='menu'>
            <h1>Budo Shop</h1>
            <div className='botonera'>
                <button type='button' class="btn btn-primary mx-4">La empresa</button>
                <button type='button' class="btn btn-primary mx-4">Productos</button>
                <button type='button' class="btn btn-primary mx-4">Contacto</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar

