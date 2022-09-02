import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './Pokedex/PokemonCard'
import SearchInput from './Pokedex/SearchInput'
import SelectType from './Pokedex/SelectType'
import HeaderPokedex from './Pokedex/HeaderPokedex'


const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState('All')

  

  const nameTrainer = useSelector(state => state.nameTrainer)

  useEffect(() => {

    if (optionType !== 'All') {
      // aqi se hace la logica cuando el usuario qiere filtar por tipo
      const URL = `https://pokeapi.co/api/v2/type/${optionType}/`
      axios.get(URL)
        .then(res => {
          const arr = res.data.pokemon.map(e => e.pokemon)
          setPokemons({ results: arr })
        })
        .catch(err => console.log(err))
    } else if (pokeSearch) {
      // aqui se hace la logica cuando elusuario quiere buscar por el input
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
      const obj = {
        results: [{ url }]
      }
      setPokemons(obj)
    } else {
      // aqui se hace la logica cuando el usuario quiere todos los pokemons
      const URL = 'https://pokeapi.co/api/v2/pokemon'

      axios.get(URL)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
    }
  }, [pokeSearch, optionType])

// console.log(pokemons)


  return (
    <div className='pokedex'>
      <HeaderPokedex />
      <h1 className='pokedex__title'><span className='pokedex__span'>Welcome {nameTrainer},</span> Catch them all</h1>
      <section className='pokedex__input'>
        <SearchInput setPokeSearch={setPokeSearch} setOptionType={setOptionType} />
        <SelectType setPokeSearch={setPokeSearch} setOptionType={setOptionType} optionType={optionType} />
      </section>
      <div className='pokedex-container'>
        {
          pokemons?.results.map(pokemon => (
            <PokemonCard
              key={pokemon.url}
              url={pokemon.url}
            />
          ))
        }
      </div>
      <footer>
        <div>
          
        </div>
      </footer>
    </div>
  )


}

export default Pokedex