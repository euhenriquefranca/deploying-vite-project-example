import './style.scss'
import tel from '../../assets/images/telephone.png';
import Email from '../../assets/images/correspondencia.png';
import galera from '../../assets/images/Solidarity-pana.png';
import voltar from '../../assets/images/voltar - Copia.png'
import { Link } from 'react-router-dom';


export function Contato() {
  


  return(
   <div className='todoCont'>

    <header>
      <Link to="/Home">
        <button>
          <img src={voltar} />
        </button>
      </Link>
      
 
      <h2>vamos trabalhar <h1>juntos?</h1></h2>
      
      
      
    </header>

    <main>
      <div className='leftCont'>
        <img src='https://img.freepik.com/free-photo/team-unity-friends-meeting-partnership-concept_53876-23043.jpg?w=740&t=st=1649776329~exp=1649776929~hmac=053979b60c43145629b8366e5d6b75ca10921f0b82421e227a1c5fcb6cf93b1c'alt="" />
        <h2>Juntos somos mais fortes</h2>
      </div>
      <section>
        <article>
       <img src={tel} alt="" />
       <h1>Telefone</h1>
       <p> Estarei disponivel em horário comercial, de segunda a sexta</p>
       <a href="https://web.whatsapp.com/send?phone=+5511999899429" target="_blank"><b>(11) 99989-9429</b></a>
      </article>

      <article>
       <img src={Email} alt="" />
       <h1>G-mail</h1>
       <p> Entrarei em contato o mais breve possível durante o horario comercial</p>
       <a href="mailto:isaachanam@gmail.com? subject=subject text"><b>isaachanam@gmail.com</b></a>
      </article>
      </section>
      
    </main>

    <footer>
      
        <h2>&copy;Isaac Moretão</h2>
      
    </footer>
    
   </div>
  )
}
export default Contato;