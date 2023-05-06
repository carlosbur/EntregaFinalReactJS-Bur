import React, { useEffect, useState } from 'react'
// import { pedirProductos } from '../../helpers/pedirProductos'
import { getFirestore } from '../../Firebase/Config'
import {ImSpinner3} from 'react-icons/im'
import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'


const ItemListContainer = (props) => {

    const [items, setItems] = useState([])
    
    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()

    useEffect(() =>{
        
        setLoading(true)

        const db = getFirestore();

        const productos = categoryId
            ?db.collection('productos').where('category', '==', categoryId)
            :db.collection('productos')
            productos.get()
                .then((res) => {
                    const newItem = res.docs.map((doc)=> {
                        return {id: doc.id, ...doc.data()}
                    })
                    console.table(newItem)
                    setItems(newItem)
                })
                .catch((error) => console.log(error))
                .finally(()=>{
                setLoading(false)
                })
    }, [categoryId])
            
        
    return (
        <div>
            {
                loading 
                ? <div className='spinner'> <ImSpinner3/> </div>
                : <ItemList productos={items}/>
            }           
        </div>
    )
}

export default ItemListContainer
