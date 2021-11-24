import React from 'react'

const Coordonnees = () => {
    return (
        <div className='coordonnees'>
            <h4>BOULANGERIE D'YMARE</h4>
            <p>464 grande rue</p>
            <p> 76520 YMARE</p>
             
            <h5>Téléphone</h5>
            <p>02 27 76 24 70</p>
             
            <h5>Horaires</h5>
            <h6>Du mardi au vendredi :</h6>
            <p>06h30-13h00 et 15h00-19h30</p>
             
            <h6>Samedi :</h6>
            <p>07h00-13h00 et 15h00-19h30</p>
             
            <h6>Dimanche et jours fériés :</h6>
            <p>07h00-13h00</p>

            <img src='https://www.boulangerie-ymare.fr/wp-content/uploads/2019/10/boulangerie_intro.jpg'
            alt='coordopic'className='coordopic' />
        </div>
    )
}

export default Coordonnees
