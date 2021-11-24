import React from 'react'
import Description from './Description'
import Fournisseurs from './Fournisseurs'
import PetitCake from './PetitCake'
import PetitChoco from './PetitChoco'
import PetitPain from './PetitPain'
 
const Home = () => {
    
    

    return (
        <>
         
        <div className='container d-flex bread'>

         <div className='texto'>
         <h1>La boulangerie  <br/> d'Ymare</h1>
         
         <br/>          
          
        </div>
         
         
             
           
        </div>
    
    <div>
        <br/>
        <h2 className='d-flex justify-content-center mt-4'>PAINS, PÂTISSERIES ET VIENNOISERIES 100% FAITS MAISON</h2>
        <hr />
        <p className='paragraph'>
        Cette nouvelle boulangerie-pâtisserie-chocolaterie, 
       est dorénavant là pour vous proposer le meilleur de son 
        savoir-faire, à </p>
        <p className='paragraph'> travers ses produits 100% faits maison. Avec 12 ans 
        d’expérience en boulangerie pâtisserie et des expériences 
        professionnelles dans des</p>
        <p className='paragraph'> établissements prestigieux, il met à portée 
        de vos papilles des produits uniques et de qualité.</p>

        <br/>
        <h3 className='paragraph'>Venez découvrir nos produits  !</h3>

    </div>

    <div className=' detail'>
               
    <PetitPain />
    <PetitCake />
    <PetitChoco />       

    </div>
    
    <Description />

    <Fournisseurs />

    </>
    )
}

export default Home
