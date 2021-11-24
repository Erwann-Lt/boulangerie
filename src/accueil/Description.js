import React from 'react'
import Coeur from './Coeur'
import Horloge from './Horloge'
import People from './People'
import Tampon from './Tampon'

const Description = () => {
    return (
        <div >
            <br/>
        <h2 className='d-flex justify-content-center mt-4'>La boulangerie d'Ymare c'est</h2>
        <hr />
        
        <div class='choice'>
        
        <Coeur />
        <Tampon />
        <Horloge />
        <People />
        </div>
        


        
        </div>
    )
}

export default Description
