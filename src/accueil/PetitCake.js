import React from 'react'
import {Link} from 'react-router-dom'
const PetitCake = () => {
    return (
        <div>
            <img src='https://www.boulangerie-ymare.fr/wp-content/uploads/2019/10/accueil-patisserie_600x500px-2-1.jpg'
        alt='cake'
            className='pic'
        />
        <h2>Pâtisserie</h2>
        <p>Des classiques de la pâtisserie en version revisitée, et des créations exclusives !</p>
        <Link to='/patisserie' className='text-link'><button>Succombez</button></Link>
        </div>
    )
}

export default PetitCake
