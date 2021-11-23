import React from 'react'

const Form = () => {
    
    return (
        <form >
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
             
            <button className='btn btn-outline-dark'>Envoyer</button>
        </form>
    )
}

export default Form
