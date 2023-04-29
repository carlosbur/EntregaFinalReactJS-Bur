import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Checkout = () => {
    
    const [email, setEmail] = useState('')
    
    const [nombre, setNombre] = useState('')

    const [apellido, setApellido] = useState('')

    const [telefono, setTelefono] = useState('')
    
    const handleSubmit = (e)=>{
        e.preventDefault()

        console.log("mail", email)
        console.log("apellido", apellido)
        console.log("nombre", nombre)
        console.log("telefono", telefono)
    }


    return (
        <div>
            <h3>Terminar Compra</h3>
        <hr />

        <form onSubmit={handleSubmit} className='container mt-3'>

            <div className='form-group'>
            <label htmlFor="email">Email</label> 
            <input type="text"className='form-control' onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>

            <div className='form-group'>
            <label htmlFor="nombre">Nombre</label> 
            <input type="text"className='form-control'  onChange={(e) => setNombre(e.target.value)} value={nombre}/>
            </div>
                
            <div className='form-group'>
            <label htmlFor="apellido">Apellido</label> 
            <input type="text"className='form-control'  onChange={(e) => setApellido(e.target.value)} value={apellido}/>
            </div>

            <div className='form-group'>
            <label htmlFor="telefono">Telefono</label> 
            <input type="text"className='form-control'  onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
            </div>
        <button type='submit' className='btn btn-success'>Finalizar</button>
        <Link to='/cart' className='btn btn-info m-2'>Volver al Carrito</Link>
        </form>
        </div>
    )
}

export default Checkout
