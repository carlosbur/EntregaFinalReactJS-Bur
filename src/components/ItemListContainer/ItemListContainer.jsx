import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = (props) => {
    return (
        <div>
            <h2>Budo Shop</h2>
            <hr/>
            <h3>{props.greeting}</h3>
        </div>
    )
}

export default ItemListContainer
