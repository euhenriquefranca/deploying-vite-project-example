import { CaretCircleLeft } from 'phosphor-react';
import { Link } from 'react-router-dom';
import Isaac from '../../Assets/Isaac.png';
import logo from '../../Assets/logo.png';
import './Stylles.scss';

export function Tecnologias() {
  return(
    <body>
      <div >
      <header className='headerProjects'>
        <Link to='/Home' >
         <CaretCircleLeft className='Button' color="#ffffff" style={{marginLeft: '20px'}} />
        </Link>
        
        <Link to='Home/contato'>
          <img src={Isaac} alt="Logo-Isaac" />
        </Link>
        
        <Link to='/'>
          <img src={logo} alt="" />
        </Link>
        
        </header>
      </div>
    </body>
  )
}