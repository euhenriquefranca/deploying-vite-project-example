import React from 'react';
import { Link } from 'react-router-dom'
import './style.scss'
import Astronauta from '../../assets/images/astronauta-em-roupa-espacial-flutuando-sem-peso-espaçonave-ilustração-vetorial-com-linhas-de-contorno-preto-isoladas-sobre-167320150-removebg-preview.png'
import voltar from '../../assets/images/voltar.png'

export function Index() {
  


  return(
   <div >

     
     <Link to="/Home">
      <button>
        <img src={voltar} alt="Voltar" />
      </button>
      </Link>

    <div className='TudoSobre'>
      
        <img src={Astronauta} alt="" />
       <div>
         <h1>oauryskdfslkjd</h1>
         <p>@GabrielSales Como você não está conseguindo desativar o firewall do seu roteador nem desativar o DMZ, eu <br/> recomendo você procurar assistência técnica com seu provedor de internet a rádio, pois não há como eu  <br/>saber como o DMZ está configurado em sua rede, não sei se seu provedor permite desativá-lo, e também <br/>não sei se seu provedor permite alterar o DNS. Encontramos a causa do problema, mas não consigo ir além disto. – 
         Renan Araújo
         14/10/2016 às 1:26</p>
      </div>
    
    </div>
   </div>
  )
}
export default Index;