import React from 'react'
import {Link} from 'react-router-dom'
const PetitPain = () => {
    return (
        <div  >
            <img src='https://www.boulangerie-ymare.fr/wp-content/uploads/2019/10/accueil-boulangerie.jpg'
        alt='bread'
            className='pic'
        />
        <h2>Boulangerie</h2>
        <p>Des baguettes et pains dans leur version classique ou spéciale pour tous les goûts.</p>
        <Link to='/boulangerie' className='text-link'><button>Savourez</button></Link>
        </div>
    )
}

export default PetitPain
