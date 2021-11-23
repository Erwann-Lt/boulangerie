import React from 'react'
import dataBaguettes from './dataBaguettes'
 

const BaguettesSpec = () => {

    const data= dataBaguettes.map(bag=>(
        <div className='d-flex col-sm-4 gri'>
                <img src={bag.image} alt="photos"className='imgspec'/>
                <h5>{bag.name}</h5>
                <p>{bag.description}</p>
        </div>
          

       ))

       return (
        <div >
        
        <br/><br/><br/>
            <h2 className='d-flex justify-content-center mt-4'>
            NOS BAGUETTES SPÉCIALES</h2>
            <hr/> 
      

       
            <p className=' d-flex justify-content-center 
            align-content-center align-items-center'> 
            En plus de la baguette classique, 
            découvrez nos baguettes originales pour varier les saveurs
            <br/> 
             
             </p>

            
            <div className='row'>
                 {data}
            </div>
         
        </div>
    )
}

export default BaguettesSpec
