import React from 'react'
import {Link } from 'react-router-dom'

const Affiche = () => {
    return (
        <div>
        <div className='affiche container-fluid  '>

        <Link to='/boulangerie' className='text-link'><h3> Boulangerie</h3></Link>
        
        <Link to='/patisserie' className='text-link'><h3>Pâtisserie</h3></Link>
        
        
        <Link className='text-link' to='/'><img src='https://www.gravosteel.com/800-thickbox_default/sticker-boulanger-2.jpg'
        alt='logo'
        className='logo d-flex mb-4'           
        /></Link>

        <Link to='/chocolaterie' className='text-link'><h3> Chocolaterie</h3></Link>

        <Link to='/contact' className='text-link'><h3> Contact</h3></Link>

        </div>

       
        </div>
    )
}

export default Affiche
