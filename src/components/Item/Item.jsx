import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, description, price, image, category }) => {
    return (
        <div className='item'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title> {description} </Card.Title>
                    <Card.Title> Precio: $ {price} </Card.Title>
                    <Card.Title> Categoría: {category} </Card.Title>
                    <Link to={`/detail/${id}`}>
                    <Button variant="primary">Ver más detalles</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
