import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'

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
            <img className='home__img' src="src/assets/img/pokedex-title.png" alt="" />
            <h1 className='home__h1'>¡Hi Trainer!</h1>
            <p className='home__p'>To start, give me your trainer name</p>
            <form className='home__form' onSubmit={handleSubmit}>
                <input className='home__input' id='name' type="text" placeholder='Name' />
                <button className='home__btn'>Catch Them All</button>
            </form>
            <footer className='home__footer'>
                <img className='footer__img' src="src/assets/img/footer-home.png" alt="" />
            </footer>
        </div>
    )
}

export default Home