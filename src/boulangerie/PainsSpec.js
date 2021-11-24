import React  from 'react'
import dataPains from './dataPains'
 

const PainsSpec = () => {
    
    const data= dataPains.map(pain=>(
        <div className='d-flex col-sm-4 gri'>
                <img src={pain.image} alt="photos"className='imgspec'/>
                <h5>{pain.name}</h5>
                <p>{pain.description}</p>
        </div>
          

       ))

       return (
        <div  >
        
        <br/><br/><br/>
            <h2 
            id='pains-speciaux'
            className='d-flex justify-content-center mt-4'>
            NOS PAINS SPÉCIAUX</h2>
            <hr/> 
      

       
            <p className=' d-flex justify-content-center 
            align-content-center align-items-center'> 
            Les pains spéciaux permettent d’agrémenter les repas des 
            grandes occasions ou simplement de varier les saveurs.
            <br/> 
            Les pains suivants sont actuellement disponibles dans notre 
             boulangerie d'Ymare :
             </p>

            
            <div className='row'>
                 {data}
            </div>
         
        </div>
    )
}

export default PainsSpec
