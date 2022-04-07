import React from 'react';
import './style.scss'

import I from '../../assets/images/Letra-I.png'
import { Link } from 'react-router-dom'


export function Index() {
  


  return(
   <div  className='Landing-Page'>

    <div>
      <Link to="/Home">
        
        <button>
        
         <img src={I} alt="Letra I" />
        </button>
      </Link>
    </div>

   </div>
  )
}
export default Index;