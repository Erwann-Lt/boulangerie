import React from 'react'
import Coordonnees from './Coordonnees'
import Form from './Form'
import Map from './Map'
import useWindowSize from '../useWindowSize'


 
const Contact = () => {
    const { width } = useWindowSize();

    return (
        <div className='contact'>  
        
        <h2 className='d-flex justify-content-center mt-4'>
        CONTACTEZ-NOUS</h2>
        <hr />
        
        {width < 650 ?
        
        <div>
        <h2 className='  paddingg'>Laissez-nous un message</h2><br/>
        </div>

        :


        <div className='d-flex rows'>
        
        <div className='col-8'>
        <br/>
          
        
        <h4 className='introb'>Veuillez remplir le formulaire<br/>
        de contact ci-dessous.</h4><br/>
        <p className='introb'>Notre équipe est disponible <br/>
        pour répondre à vos 
        questions dans les plus <br/>
        bref délais.</p>
        </div>
       
        <div className='col-4'>
        <img src='https://previews.123rf.com/images/tigatelu/tigatelu1307/tigatelu130700200/20897431-illustration-de-bande-dessin%C3%A9e-d-un-boulanger-avec-du-pain.jpg'
        alt='introBread'
            className='pictureContact'
        />
        </div>
        </div>
        }
        

        <div className='d-flex justify-content-center'>
        
        <Coordonnees />
        <Form />
        </div>

        <div className='container-fluid'>
        <Map />
        </div>
       
        </div>
    )
}

export default Contact
