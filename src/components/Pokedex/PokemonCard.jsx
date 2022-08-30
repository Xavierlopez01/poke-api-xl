import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StatPokemon from './StatPokemon'
import { useNavigate } from 'react-router-dom'

const PokemonCard = ({ url }) => {

    const [pokemon, setPokemon] = useState()
    
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])


    const handleClick = () => navigate(`/pokedex/${pokemon.name}`)


    return (
        <article onClick={handleClick} className='pokedex__card' id={pokemon?.types[0].type.name}>
            <header className='pokedex__card-header'>
                <img className='pokedex__card-img' src={pokemon?.sprites.other.home['front_default']} alt="" />
            </header>
            <section className='pokedex__card-body'>
                <h3 className={`pokedex__card-body-h3 ${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
                
                <ul className='pokedex__card-body-ul'>
                    {
                        pokemon?.types.map(slot => (
                            <li key={slot.type.url}>{slot.type.name}</li>
                        ))
                    }
                </ul>
                <hr className='pokedex__card-body-hr'/>
            </section>
            <footer className='pokedex__card-footer'>
                <ul className='pokedex__card-footer-ul'>
                    {
                        pokemon?.stats.map(stat => (
                            <StatPokemon
                                key={stat.stat.url}
                                infoStat={stat}
                            />
                        ))
                    }
                </ul>
            </footer>
        </article>
    )
}

export default PokemonCard