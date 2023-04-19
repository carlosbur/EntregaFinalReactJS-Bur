import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        
        <nav className='menu'>
            <NavLink to="/">
            <h1>Budo Shop</h1>
            </NavLink>

            <ul className='botonera'>
                <li> <NavLink to="/"> Principal</NavLink> </li>

                <li> <NavLink to="/productos/indumentaria"> Indumentaria </NavLink> </li>
                <li> <NavLink to="/productos/protecciones"> Protecciones </NavLink> </li>

                <li> <NavLink to="/counter">Contador</NavLink> </li>
                <li> <NavLink to="/pika">Pokemons</NavLink> </li>
                <li> <NavLink to="/cart"> <CartWidget/> </NavLink> </li>
            </ul>
            {/* <div >
                <button type='button' class="btn btn-primary mx-4">La empresa</button>
                <button type='button' class="btn btn-primary mx-4">Productos</button>
                <button type='button' class="btn btn-primary mx-4">Contacto</button>
            </div> */}
            
        </nav>
    )
}

export default NavBar

