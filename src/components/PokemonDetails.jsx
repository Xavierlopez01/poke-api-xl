import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../index.css'
import HeaderPokedex from './Pokedex/HeaderPokedex'
import pokeball from '../assets/img/pokeball.png'

const PokemonDetails = () => {
  const [pokeDetails, setPokeDetails] = useState()

  const { name } = useParams()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
      .then(res => setPokeDetails(res.data))
      .catch(err => console.log(err))

  }, [])

  return (
    <article className='poke-details'>
      <header className='header__poke-details'>
        <HeaderPokedex />
      </header>
      <section className='poke-details__header'>
        <div className='poke-details__div' >
          <div className='poke-details__div-img' id={pokeDetails?.types[0].type.name}>
            <img className='poke-details__img' src={pokeDetails?.sprites.other.home['front_default']} alt="" />
          </div>
          <h2 className={`poke-details__id ${pokeDetails?.types[0].type.name} `}>{`#${pokeDetails?.id}`}</h2>
          <h2 className={`poke-details__name ${pokeDetails?.types[0].type.name}`}>{pokeDetails?.name}</h2>
          <div >
            <ul className='poke-details__pound'>
              <li>
                <h6>Weight</h6>
                <p className='poke-details__pound-p'>{pokeDetails?.weight}</p>
              </li>
              <li>
                <h6>Height</h6>
                <p className='poke-details__pound-p'>{pokeDetails?.height}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='poke-details__type-skill'>
          <ul className='poke-details__type'>
          <h3>Type</h3>
          <div className='poke-details__skill'>
            {
              pokeDetails?.types.map(type => (
                <li className='poke-details__skill type' id={type.type.name} key={type.type.url}>{type.type.name}</li>
              ))
            }
          </div>
            
          </ul>
          <ul className='poke-details__type'>
          <h3>Skills</h3>
          <div className='poke-details__skill'>
            {
              pokeDetails?.abilities.map(ability => (
                <li className='skill' key={ability.ability.url}>{ability.ability.name}</li>
              ))
            }
          </div>
            
          </ul>
        </div>
        <div className='stats'>
          <h2>Stats </h2>
        </div>
          
        <div >
          {
            pokeDetails?.stats.map(stat => (
              <div  key={stat.stat.url}>
                <h3>{stat.stat.name}</h3>
                <div className='progress-bar' >{stat['base_stat']}</div>
              </div>
            ))
          }
        </div>
      </section>
      <section className='poke-movements' >
        <h2 className='stats'>Movements</h2>
        <div className='poke-movements__move'>
          {
            pokeDetails?.moves.map(actions => (
              <h4 className='poke-movements__name' key={actions.move.url}>{actions.move.name}</h4>
            ))
          }
        </div>
      </section>
    </article>
  )
}

export default PokemonDetails