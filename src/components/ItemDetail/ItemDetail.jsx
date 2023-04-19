import React from 'react'
import { Card, Button } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, description, price, image, category }) => {
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
                    <ItemCount/>
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail
