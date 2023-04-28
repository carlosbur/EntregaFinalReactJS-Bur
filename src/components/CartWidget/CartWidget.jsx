import React, { useContext } from 'react'
import { GrCart } from 'react-icons/gr';
import './CartWidget.css'
import { CartContext } from '../context/CartContex';

const CartWidget = () => {
    
    const {calcularCantidad} = useContext(CartContext)

    return (
        <div>
            <GrCart className="carrito"/>
            <span>{calcularCantidad()}</span>
        </div>
    )
}

export default CartWidget
