import React  from 'react'
import dataChoco from './dataChoco'
 

const ChocoSpec = () => {
    
    const data= dataChoco.map(choco=>(
        <div className='d-flex col-sm-4 gri'>
                <img src={choco.image} alt="photos"className='imgspec'/>
                <h5>{choco.name}</h5>
                <p>{choco.description}</p>
        </div>
          

       ))

       return (
        <div  >
        
        <br/><br/><br/>
            <h2 
            id='pains-speciaux'
            className='d-flex justify-content-center mt-4'>
            LES CHOCOLATS RÉALISÉS À LA BOULANGERIE D'YMARE</h2>
            <hr/> 
      

       
            <p className=' d-flex justify-content-center 
            align-content-center align-items-center'> 
            Notre boulanger, artisan boulanger-pâtissier, a réalisé un chocolat sur mesure en faisant assembler différentes <br/>
            origines de chocolats par notre fournisseur Cacao Barry. Ce mélange unique, également utilisé dans certaines<br/>
             de nos pâtisseries, compose les bonbons au chocolat que vous trouverez en magasin.
             <br/><br/>
            Nous utilisons également des amandes et des noisettes torréfiées sur place, pour agrémenter certaines de <br/>
            ces confiseries chocolatées. Le praliné est également réalisé maison. Nous assurons ainsi toute la <br/>
            transformation, de la matière brute au produit fini !
            <br/><br/>
            Pour vos grandes occasions, nous réalisons également des pièces en chocolat.<br/>
            Apportez-nous vos idées, vos demandes particulières, et nous leur donnons forme et goût !
             </p>

            
            <div className='row'>
                 {data}
            </div>
         
        </div>
    )
}

export default ChocoSpec
