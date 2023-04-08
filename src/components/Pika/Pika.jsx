import React, { useEffect, useState } from 'react'
import './Pika.css'

const Pika = () => {
    
    const [pokemon, setPokemon] = useState('');
    
    const [id, setId] = useState(1);

    const [busqueda, setBusqueda] = useState('');
    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPokemon({
                    numero: data.id,
                    nombre: data.name,
                    img: data.sprites.front_default,
                })
            })

    }, [])

    return (
        <div>
            <p className='pika'>{pokemon.numero}</p>
            <p className='pika'>{pokemon.nombre}</p>
            <img src={pokemon.img} alt="pokemon" />
        </div>
    )
}

export default Pika
