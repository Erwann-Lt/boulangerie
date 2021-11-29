 
import React, {useRef} from 'react'
import BaguettesSpec from './BaguettesSpec'
import IntroB from './IntroB'
import PainsSpec from './PainsSpec'

const Boulangerie = () => {

  const painsref=useRef()
  const baguettesRef=useRef()

  function scrollClick() {
    painsref.current.scrollIntoView({ behavior: 'smooth' })
}
function scrollClickz() {
  baguettesRef.current.scrollIntoView({ behavior: 'smooth' })
}

    return (
      <>

<div className='d-flex container-fluid boubou'>
            
           <button 
            onClick={scrollClick}
           className='btn btn-outline-dark'>
           Nos pains spéciaux</button>

           <button
           onClick={scrollClickz} 
           className='btn btn-outline-dark'>
           Nos baguettes spéciales</button>
        </div>

        <br/> <br/> <br/> <br/>    
       
        <div className='introb' >  
        <IntroB />
        <img src='https://www.boulangerie-ymare.fr/wp-content/uploads/2019/10/boulangerie_intro.jpg'
        alt='introBread'
        className='imgBoul'/>
         
        </div>
        <br ref={painsref}  /><br /><br /><br  /> 
        
        <div className='container spec'    >
          <PainsSpec />
        </div>  
        
        <br ref={baguettesRef}  /><br /><br /><br  /> 
        <div className='container spec'>
          <BaguettesSpec />
        </div>

        <div className='d-flex mb-4 mt-4 justify-content-center flex-center flex-column align-items-center align-content-center'>
        <svg  xmlns="http://www.w3.org/2000/svg" width="75" height="75" 
        fill="currentColor" class="bi bi-chat-quote" viewBox="0 0 16 16">
        <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
        <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
        </svg>  
        <h3 className='d-flex justify-content-center flex-center flex-column align-items-center align-content-center'>« Venez découvrir plus de pains, viennoiseries, pâtisseries, chocolats et confiseries dans 
        <br/></h3>
        <h3 className='d-flex mb-4 justify-content-center flex-center flex-column align-items-center align-content-center'>notre boulangerie d'Ymare»</h3>
        </div>
        
        
      </>
    )
}

export default Boulangerie
