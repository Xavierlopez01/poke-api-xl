import React from 'react'

const StatPokemon = ({ infoStat }) => {
    return (
        <li className='pokemon__card-stat'>
            <h4 className='pokemon__card-stat-h4'>{infoStat.stat.name}</h4>
            <p className='pokemon__card-stat-p'>{infoStat['base_stat']}</p>
        </li>
    )
}

export default StatPokemon