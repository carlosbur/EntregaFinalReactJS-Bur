import React, { useEffect, useState } from 'react'
import { pedirProductos } from '../../helpers/pedirProductos'
import {ImSpinner3} from 'react-icons/im'
import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.css"


const ItemListContainer = (props) => {

    const [items, setItems] = useState([])
    
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        
        setLoading(true)
        pedirProductos()
            .then((res) => {
                setItems(res)
                console.log(res)
            })
            .catch((error) => console.log(error))
            .finally(()=>{setLoading(false)})

    }, [])
        


    return (
        <div>
            {
                loading 
                ? <ImSpinner3/>
                : <ItemList productos={items}/>
            }
            
            {/* <h2>Budo Shop</h2>
            <hr/>
            <h3>{props.greeting}</h3> */}
        </div>
    )
}

export default ItemListContainer
