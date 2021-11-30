import React from 'react'
import {Link} from 'react-router-dom'
import useWindowSize from '../useWindowSize'

const Footer = () => {
    const { width } = useWindowSize();

    const footHeight = width <650 ? 250 : 500
    return (
        <div className=' footer'
        style={{height:footHeight}}
        >
            
            <div className='logofooter'>
            <Link to='/'>
            <img src='https://www.gravosteel.com/800-thickbox_default/sticker-boulanger-2.jpg'
                 alt='logo' className='logofooter d-flex mb-4' />
                 </Link>
            </div>
        
            
            <div className='footertext'>
                <h4> BOULANGERIE-PÂTISSERIE D'YMARE</h4>
                <p>464 grande rue</p>
                <p> 76520 YMARE</p>
                <p>02 27 76 24 70</p>
                <br/>
                <h4>Contact</h4>
                <Link to='/contact' className='text-link'><p>Envoyez-nous un message</p></Link>
            </div>
            
            {width < 650 ? null :  <div className='footertext'>
                <h4> Horaires</h4>
                <h5>Du mardi au vendredi :</h5>
                <p>06h30-13h00 et 15h00-19h30</p>
                <h5>Samedi :</h5>
                <p>07h00-13h00 et 15h00-19h30</p>
                <h5>Dimanche et jours fériés :</h5>
                <p>07h00-13h00</p>
            </div>}
            
           
         
        </div>
    )
}

export default Footer
