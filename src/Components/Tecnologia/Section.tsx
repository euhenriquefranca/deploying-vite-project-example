import React from 'react';
import './Section.scss'

//type TecnologiaProps ={ 
//
//  img: any;
//  title?: string;
//  text?: string;
//
//}
export function Tecnologia(props: { img: string | undefined; })  {
  


  return(
   <>
     
     <section>
      <img src={props.img} alt="" />
     </section>
     
   </>
  )

}
export default Tecnologia;