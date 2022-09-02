import React from 'react'
import pokedexHeader from '../../assets/img/pokedex-header.png'
import pokedex from "../../assets/img/pokedex.png"


const HeaderPokedex = () => {
  return (
    <article>
        <header className='header__pokedex'>
        <img className='pokedex__img1' src={pokedexHeader} alt="" />
        <img className='pokedex__img2' src={pokedex} alt="" />
        </header>
    </article>
  )
}

export default HeaderPokedex