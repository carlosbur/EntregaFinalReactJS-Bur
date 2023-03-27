import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = (props) => {
    return (
        <div>
            <h2>Soy el home</h2>
            <hr/>
            <h3>{props.saludo}</h3>
        </div>
    )
}

export default ItemListContainer
