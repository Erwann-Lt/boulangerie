import React  from 'react'
import dataClassique from './dataClassique'
 

const PatClassique = () => {
    
    const data= dataClassique.map(classi=>(
        <div className='d-flex col-sm-4 gri'>
                <img src={classi.image} alt="photos"className='imgspec'/>
                <h5>{classi.name}</h5>
                <p>{classi.description}</p>
        </div>
          

       ))

       return (
        <div  >
        
        <br/><br/><br/>
            <h2 
            id='pains-speciaux'
            className='d-flex justify-content-center mt-4'>
            NOS PÂTISSERIES CLASSIQUES</h2>
            <hr/> 
      

            <div className='d-flex row'>
            <div className='col-6'>
            <p className=' d-flex 
            align-content-center align-items-center '> 
            Parmi nos pâtisseries à la part ou à partager, vous trouverez en vitrine :
            <br/></p>
            <p className=' d-flex justify-content-center 
            align-content-center align-items-center '>   
            <ul>
                <li>de nombreuses tartes aux fruits de saison</li>
                <li>des millefeuilles</li>
                <li>des religieuses</li>
                <li>des éclairs au chocolat, café, vanille, caramel au beurre salé…</li>
                <li>différentes saveurs de macarons</li>
            </ul></p>
            </div>
            

            <div className='col d-flex patext'>
            <p>
            <br/><br/>
            Nous proposons certaines pâtisseries «classiques» dans leur <br/>
             version revisitée, 
            comme le Saint-Honoré, la meringue au chocolat <br/>
            ou la tarte 
            profiteroles.<br/><br/> 

            Les pâtisseries au chocolat sont pour la plupart réalisées avec <br/>
            le chocolat exclusif réalisé par notre artisan pâtissier le Er. <br/>
            Cet assemblage de fèves de cacao a été sélectionné et conçu sur <br/>
            mesure avec 
            notre fournisseur Cacao Barry. Ceci apporte une <br/>
            saveur unique que
            vous ne trouverez nulle part ailleurs.
            <br/><br/>
             </p>
            </div>
            </div>
            
            

            
            <div className='row'>
                 {data}
            </div>
         
        </div>
    )
}

export default PatClassique
