import { Link } from 'react-router-dom'
import './style.scss'

import voltar from '../../assets/images/voltar.png'

export function Projetos() {
  


  return(
   <div >

     
     <Link to="/Home">
      <button>
        <img src={voltar} alt="Voltar" />
      </button>
      </Link>

    <div className='tudoProj'>
      <section>
        <a href="https://github.com/IsaacMoretao/Calc.Port" target="_blank">
          <article>
            <img src="" alt="" />
            <h1>Calculadora-JS</h1>
          </article>
        </a>

        <a href="https://github.com/IsaacMoretao/Bateria.Port" target="_blank">
          <article>
            <img src="" alt="" />
            <h1>Bateria-JS</h1>
          </article>
        </a>
        <a href="https://github.com/IsaacMoretao/Portf-lio" target="_blank">
          <article>
            <img src="" alt="" />
            <h1>1° portifólio</h1>
          </article>
        </a>
        
        <a href="https://github.com/IsaacMoretao/Calculadora/tree/main/calculadora" target="_blank">
          <article>
            <img src="" alt="" />
            <h1>Calculadora-react</h1>
          </article>
        </a>
        
        <a href="https://github.com/IsaacMoretao/Hooks/tree/main/hooks"  target="_blank">
          <article>
            <img src="" alt="" />
            <h1>Rooks</h1>
          </article>
        </a>

        <a href="https://github.com/IsaacMoretao/letmeask" target="_blank">
          <article>
            <img src="" alt="" />
            <h1>LetMeAsk</h1>
          </article>
        </a>

        <a href="https://github.com/caiocesaar/tintasbrazilian-site" target="_blank">
          <article>
            <img src="" alt="" />
            <h1>Brazilian</h1>
          </article>
        </a>
        
        
        
      </section>
    </div>


   </div>
  
)}
export default Projetos;