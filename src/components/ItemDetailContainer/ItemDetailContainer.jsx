import React, { useEffect, useState } from 'react'
import { pedirProductos } from '../../helpers/pedirProductos'
import {ImSpinner3} from 'react-bootstrap/im'  
import ItemDetail from '..ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)
        pedirProductos()
            .then(res => {
                setItem(res)
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <section>
            {
                loading 
                ?<ImSpinner3/>
                :<ItemDetail/>

            }

        </section>

    )
}

export default ItemDetailContainer
