import React from 'react'
import useWindowSize from '../useWindowSize'

const IntroB = () => {

    const { width } = useWindowSize();
    return (
        <div className='introBoul'>
           <h2 className='h2boul'>BOULANGERIE : <br/>
            DES PAINS CLASSIQUES ET SPÉCIAUX <br/>
            FAITS MAISON</h2>
            <hr/> 
            {width < 650 ?
                <p>Tous les pains, baguettes et viennoiseries que nous proposons<br/> 
             à la Boulangerie d'Ymare sont pétris et cuits sur place.<br/> 
              Certaines recettes sont uniques, élaborées par nos artisans boulangers.
                </p>
              :
              <p>Tous les pains, baguettes et viennoiseries que nous proposons<br/> 
             à la Boulangerie d'Ymare sont pétris et cuits sur place.<br/> 
              Certaines recettes sont uniques, élaborées par nos artisans boulangers.
              <br/> <br/> 

          La farine de blé utilisée est une farine Label Rouge. Elle est <br/> 
          fabriquée avec du blé cultivé en France et transformé <br/> 
          en région parisienne dans le Vexin. Ceci vous garantit une qualité <br/> 
          gustative du pain et une chaîne d’approvisionnement courte. 
          <br/> Quand au beurre utilisé dans nos viennoiseries, <br/> 
          c’est un beurre AOP.
          <br/> <br/> 

          Nous proposons des baguettes et pains blancs classiques, mais<br/> 
           également un large choix de pains spéciaux. <br/> 
           Ceux-ci peuvent varier en fonction des saisons, de <br/> 
           l’envie de notre équipe boulangère et de l’attente de notre <br/> 
           clientèle.<br/> <br/>     

          Le pain est cuit tout au long de la journée pour <br/> 
          vous assurer du pain frais 
          quelle que soit l’heure de votre passage.</p>
            }

            
        </div>
    )
}

export default IntroB
