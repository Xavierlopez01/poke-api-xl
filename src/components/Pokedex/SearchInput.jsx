import React from 'react'

const SearchInput = ({ setPokeSearch }) => {

    const handleSubmit = e => {
        e.preventDefault()
        setPokeSearch(e.target.searchText.value.trim().toLowerCase())
    }

    return (
        <form className='search__form' onSubmit={handleSubmit}>
            <input className='search__input' id='searchText' type="text" placeholder='look for a pokemon' />
            <button className='search__btn'>Search</button>
        </form>
    )
}

export default SearchInput