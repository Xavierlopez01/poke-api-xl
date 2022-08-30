import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './Pokedex/PokemonCard'
import SearchInput from './Pokedex/SearchInput'
import SelectType from './Pokedex/SelectType'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState()


  const nameTrainer = useSelector(state => state.nameTrainer)

  useEffect(() => {

    if (pokeSearch) {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`

      const obj = {
        results: [
          {
            url
          }
        ]
      }
      setPokemons(obj)
    } else {

      const URL = 'https://pokeapi.co/api/v2/pokemon'
      axios.get(URL)
        .then(res => {
          setPokemons(res.data)
          setIsloading(false)
        })
        .catch(err => console.log(err))
    }
  }, [pokeSearch])

  console.log(pokeSearch)

 

    return (
      <div className='pokedex'>
        <header className='header__pokedex'>
          <img className='pokedex__img1' src="src/assets/img/pokedex-header.png" alt="" />
          <img className='pokedex__img2' src="src/assets/img/pokedex.png" alt="" />
        </header>
        <h1 className='pokedex__title'><span className='pokedex__span'>Welcome {nameTrainer},</span> here you can find your favorite pokemon</h1>
        <section className='pokedex__input'>
        <SearchInput setPokeSearch={setPokeSearch} />
        <SelectType setOptionType={setOptionType} />
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
            <button>next</button>
          </div>
        </footer>
      </div>
    )
  

}

export default Pokedex