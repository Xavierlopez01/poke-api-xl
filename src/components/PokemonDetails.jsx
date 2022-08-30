import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetails = () => {
  const [pokeDetails, setPokeDetails] = useState()

  const { name } = useParams()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/ability/${name}/`
    axios.get(URL)
      .then(res => setPokeDetails(res.data))
      .catch(err => console.log(err))

  }, [])
  console.log(pokeDetails)

  console.log(name)

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default PokemonDetails