import React from 'react'
import useWindowSize from '../useWindowSize'

 

const People = () => {

    const { width } = useWindowSize();

    return (
        <div>
        {width < 650 ? 
            <div>
           <svg xmlns="http://www.w3.org/2000/svg" 
           width="60" height="60" fill="red" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg>      
        <h4 style={{fontSize:'10px'}}>Une équipe de 4 personnes à votre service</h4>
        </div>

        :

        <div>
           <svg xmlns="http://www.w3.org/2000/svg" 
           width="120" height="120" fill="red" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg>      
        <h4>Une équipe de 4 personnes à votre service</h4>
        </div>
        }
            
        </div>
    )
}

export default People
     
