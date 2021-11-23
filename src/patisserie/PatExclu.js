import React from 'react'
import dataExclu from './dataExclu'
 

const PatExclu = () => {

    const data= dataExclu.map(confi=>(
        <div className='d-flex col-sm-4 gri'>
                <img src={confi.image} alt="photos"className='imgspec'/>
                <h5>{confi.name}</h5>
                <p>{confi.description}</p>
        </div>
          

       ))

       return (
        <div >
        
        <br/><br/><br/>
            <h2 className='d-flex justify-content-center mt-4'>
            NOS PÂTISSERIES EXCLUSIVES</h2>
            <hr/> 
      

       
            <p className=' d-flex justify-content-center 
            align-content-center align-items-center'> 
            Venez goûter nos créations originales, conçues par notre artisan
             pâtissier le Er et ses équipes.
            <br/> 
            
             </p>
             
            
            <div className='row'>
                 {data}
                 <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
                 <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
            </div>


            <h2 className='d-flex justify-content-center mt-4'>
            DES GÂTEAUX SUR MESURE POUR VOS OCCASIONS</h2>
            <hr/> 
      

       
            <p className=' d-flex justify-content-center 
            align-content-center align-items-center'> 
            Pour les grandes occasions ou des événements particuliers, nous 
            réalisons le gâteau ou la pièce montée sur mesure que vous souhaitez, <br/>
            de façon personnalisée. Venez discuter de votre projet pour un mariage,
             anniversaire ou enterrement de vie de jeune fille/garçon.
            <br/> 
            
             </p>
         
        </div>
    )
}

export default PatExclu
