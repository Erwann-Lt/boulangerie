import React from 'react'
import {Link} from 'react-router-dom'
const PetitChoco = () => {
    return (
        <div className='choco'>
            <img src='https://www.boulangerie-ymare.fr/wp-content/uploads/2020/09/accueil-chocolaterie.jpg'
        alt='chocolate'
            className='pic'
        />
        <h2>Chocolaterie</h2>
        <p >Des bonbons, du praliné, des tablettes, et du chocolat à la saveur unique !</p>
        <Link to='/chocolaterie' className='text-link'><button>Dégustez</button></Link>
        </div>
    )
}

export default PetitChoco
