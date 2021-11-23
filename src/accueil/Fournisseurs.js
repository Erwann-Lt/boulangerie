import React from 'react'

const Fournisseurs = () => {
    return (
        <div>
               <br/>
        <h2 className='d-flex justify-content-center mt-4'>
        Nos fournisseurs</h2>
        <hr />
        
        <div class='choice'>
        
        <a href='https://www.cacao-barry.com/en-OC' target='_blank' rel='noreferrer'>
            <img className='pipo' src='https://www.boulangerie-ymare.fr/wp-content/uploads/2019/10/fournisseur-barry-1.png'
            alt='logo' />
        </a>
        
        <a href='http://www.moulinsdechars.com/' target='_blank' rel='noreferrer'>
            <img className='pipo' src='https://www.boulangerie-ymare.fr/wp-content/uploads/2019/10/fournisseur-chars-1.png' alt='logo' />
        </a>

        <a href='https://www.minoterie-forest.com/' target='_blank' rel='noreferrer'>
            <img className='pipo' src='https://www.boulangerie-ymare.fr/wp-content/uploads/2019/10/fournisseur-forest-1.png' alt='logo' />
        </a>

        </div>
        </div>
    )
}

export default Fournisseurs
