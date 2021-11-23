import React from 'react'
import dataConfi from './dataConfi'
 

const ConfiSpec = () => {

    const data= dataConfi.map(confi=>(
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
            LES AUTRES PRODUITS DE CONFISERIE DISPONIBLES</h2>
            <hr/> 
      

       
            <p className=' d-flex justify-content-center 
            align-content-center align-items-center'> 
            Découvrez nos confiseries maison ! Vous trouverez
             dans notre Boulangerie du Er des bonbons de caramel 
             mou et des tablettes de praliné <br/>
              maison, des pâtes 
            de fruits, des guimauves, réalisés maison par nos équipes.
            <br/> 
            
             </p>
             
            
            <div className='row'>
                 {data}
                 <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
                 <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
            </div>
         
        </div>
    )
}

export default ConfiSpec
