import React from 'react'
import useWindowSize from '../useWindowSize'

const Form = () => {
         const { width } = useWindowSize();

    return (
        <form >
        {width < 650 ?
            <div>
              <input type="text" placeholder='Nom*' />
            <br/> <br/>
            <input   type="text" placeholder='Prénom*' />
            <br/> <br/>
            <input type="text" placeholder='Email*' />
            <br/> <br/>
            <textarea type="text" placeholder='Message*' rows='5' cols='21'/>
            <br/> <br/>   
            </div>

            :

            <div>
             <input type="text" placeholder='Nom*' />
            <br/> <br/>
            <input type="text" placeholder='Prénom*' />
            <br/> <br/>
            <input type="text" placeholder='Email*' />
            <br/> <br/>
            <input type="text" placeholder='Téléphone*' />
            <br/> <br/>
            <input type="text" placeholder='Objet*' />
            <br/> <br/>
            <textarea type="text" placeholder='Message*' rows='10' cols='41'/>
            <br/> <br/>   
            </div>
           
        }
            
             
            <button className='btn btn-outline-dark'>Envoyer</button>
        </form>
    )
}

export default Form
