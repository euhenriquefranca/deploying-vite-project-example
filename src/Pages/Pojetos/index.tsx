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
        <article>
          <img src="" alt="" />
          <h1>Calculadora-JS</h1>
        </article>
        <article>
          <img src="" alt="" />
          <h1>Bateria-JS</h1>
        </article>
        <article>
          <img src="" alt="" />
          <h1>1° portifólio</h1>
        </article>
        <article>
          <img src="" alt="" />
          <h1>Calculadora-react</h1>
        </article>
        <article>
          <img src="" alt="" />
          <h1>Rooks</h1>
        </article>
        <article>
          <img src="" alt="" />
          <h1>LetMeAsk</h1>
        </article>
        
        
      </section>
    </div>


   </div>
  
)}
export default Projetos;