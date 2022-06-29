
import './Stylles.scss';
import Logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';
import { Home } from '../Home/Index';

export function InicialPage() {
  return(
    <body>
      <div className='inicial-page'>

        <Link to={'Home'}>
        <div className='div-principal'></div>
        </Link>
        

      </div>
    </body>
  )

}