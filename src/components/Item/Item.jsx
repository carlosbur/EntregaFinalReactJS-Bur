import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './Item.css'

const Item = ({ id, description, price, image }) => {
    return (
        <div className='item'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title> {description} </Card.Title>
                    <Card.Title> {price} </Card.Title>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
