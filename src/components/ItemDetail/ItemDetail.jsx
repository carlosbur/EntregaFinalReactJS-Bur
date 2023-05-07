import React, { useContext } from 'react'
import './ItemDetail.css'
import { Card, Button } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../context/CartContex'


const ItemDetail = ({ id, name, description, price, image, category, stock }) => {

    const navigate = useNavigate()

    const volverAtras = () => {

        navigate (-1)
    }

    const {addToCart} = useContext(CartContext)


    const [counter, setCounter] = useState (0)
    
    const sumarAlCarrito = () => {

        const newItem = {
            id, 
            name,
            description,
            image,
            price,
            category,
            counter
        }
        console.log(newItem)
        addToCart(newItem)
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            timer: 1200
        })
    }

    return (
        <div className='item'>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title> {description} </Card.Title>
                    <Card.Title> Precio: $ {price} </Card.Title>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, et amet! Cum voluptates quos corrupti
                        molestias facere sunt! Suscipit enim maxime provident rem corporis laboriosam aliquam exercitationem tempora doloribus fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatem? Perspiciatis illo, dolores in, velit reiciendis voluptates recusandae minus modi, impedit ex dolor itaque voluptatibus aliquam quis? Assumenda, mollitia incidunt.
                    </p>
                    <Card.Title> Categoría: {category} </Card.Title>
                    <ItemCount max={stock} modify={setCounter} cantidad={counter}/>
                    <Button variant="primary" onClick={sumarAlCarrito}>Agregar al carrito</Button>
                </Card.Body>
                <Button onClick={volverAtras} variant='primary'>Volver</Button>
                <Link to='/cart' className='btn btn-info my-2'>
                    Ir al Carrito
                </Link>
            </Card>
        </div>
    )
}

export default ItemDetail
