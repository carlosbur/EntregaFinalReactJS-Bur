import React from 'react'

const Item = ({id, description, price, image}) => {
    return (
        <div>
            <h3>Id: {id} </h3>
            <p>Description: {description} </p>
            <p>Price: {price} </p>
            <img src= {image} alt= {image} />
        </div>
    )
}

export default Item
