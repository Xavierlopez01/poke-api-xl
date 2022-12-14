import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'
import pokedexTitle from "../assets/img/pokedex-title.png"
import footerHome from "../assets/img/footer-home.png"

const Home = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = e.target.name.value.trim()

        if (inputValue.length !== 0) {
            dispatch(setNameTrainer(inputValue))
            navigate('/pokedex')
        }
        e.target.name.value = ""
    }


    return (
        <div className='card-home'>
            <img className='home__img' src={pokedexTitle} alt="" />
            <li className='card_home__li'></li>
            <h1 className='home__h1'>¡Hi Trainer!</h1>
            <p className='home__p'>To start, give me your trainer name</p>
            <form className='home__form' onSubmit={handleSubmit}>
                <input className='home__input' id='name' type="text" placeholder='Name' />
                <button className='home__btn'>Catch Them All</button>
                <li className='card_home__li'></li>
            </form>
            <li className='card_home__li'></li>
            <footer className='home__footer'>
            <img className='footer__img' src={footerHome} alt="" />
        </footer>
        </div>
    )
}

export default Home