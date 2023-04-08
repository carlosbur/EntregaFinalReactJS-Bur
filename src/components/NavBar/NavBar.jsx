import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        
        <nav className='menu'>
            <h1>Budo Shop</h1>
            
            <ul className='botonera'>
                <li> <a href=""></a>La Empresa</li>
                <li> <a href=""></a>Productos</li>
                <li> <a href=""></a>Contacto</li>
            </ul>
            {/* <div >
                <button type='button' class="btn btn-primary mx-4">La empresa</button>
                <button type='button' class="btn btn-primary mx-4">Productos</button>
                <button type='button' class="btn btn-primary mx-4">Contacto</button>
            </div> */}
            <CartWidget/>
        </nav>
    )
}

export default NavBar

