import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({productos = []}) => {
    return (
        <div className='container'>
            <h3>Nuestros Productos</h3>
            <hr/>
            <div className='fila'>
            {productos.map((item) => <Item {...item} key={item.id}/>)}
            </div>
        </div>
    )
}

export default ItemList
