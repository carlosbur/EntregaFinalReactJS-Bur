import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsFillTrashFill } from 'react-icons/bs'
import './CartScreen.css'
import { CartContext } from '../context/CartContex'


const CartScreen = () => {

    const { carrito, precioTotal, removerItem, vaciarCarrito } = useContext(CartContext)

    return (
        <div className='container my-5'>
            {
                carrito.length === 0
                ?<>
                    <h3>Carrito Vacío</h3>
                    <hr />
                    <Link to='/' className='btn btn-success'>Volver a comprar</Link>
                    </>
                :<>
                        <h3>Resumen de Compra</h3>
                        <hr />
                        {
                            carrito.map((prod) => (
                                <>
                                    <div className='listado'>
                                        <p>Producto: {prod.description}</p>
                                        <p>$</p>
                                        <p>Cantidad:</p>
                                    </div>
                                    <Button className="btb btn-danger" onClick={() => removerItem(prod.id)}>
                                        <BsFillTrashFill />
                                    </Button>
                                </>
                            ))
                        }
                        <hr />
                        <strong>Precio total: $ {precioTotal()} </strong>
                        <hr />
                        <Button className='bt btn-danger' onClick={vaciarCarrito}>Vaciar Carrito</Button>
                        <Link className='btn btn-success mx-3' to='/checkout'>
                            Terminar Compra
                        </Link>
                    </>

            }
        </div>
    )
}

export default CartScreen
