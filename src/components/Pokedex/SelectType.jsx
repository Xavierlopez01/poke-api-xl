import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectType = ({ optionType, setOptionType, setPage, setCurrentBlock, setPokeSearch }) => {

    const [listTypes, setListTypes] = useState()

    useEffect(() => {
        const URL = 'https://pokeapi.co/api/v2/type'
        axios.get(URL)
            .then(res => setListTypes(res.data.results))
            .catch(err => console.log(err))
    }, [])

    const handleChange = e => {
        setOptionType(e.target.value)
        setPokeSearch('')
        setPage(0)
        setCurrentBlock(1)
    }
    

    return (
        <select className='select-type' value={optionType} onChange={handleChange}>
            <option  value="All">All pokemons</option>
            {
                listTypes?.map(type => (
                    <option key={type.name} value={type.name}>{type.name}</option>
                ))
            }
        </select>
    )
}

export default SelectType