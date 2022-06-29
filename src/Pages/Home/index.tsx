import { BotaoLink } from '../../Components/Link/Index';
import Logo from '../../Assets/logo.png';
import './Stylles.scss';
import { Link } from 'react-router-dom';
import { DiscordLogo, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from 'phosphor-react'


export function Music() {
  return(
    <div>

    </div>
  )
}
export function Home() {

  return(
    <body>
      <div className="Home-Body">
        
        <header className="H-red">
          <Link to={'/'} className='div-Logo'>
            <img src={Logo} alt="" />
          </Link>
          <BotaoLink text={'CONTATO'} posição={'horisontal-tb'} height={'48px'} width={'150px'} />

        </header>

        <main >
          <nav className="LaftNav">
            <BotaoLink text={'TECNOLOGIAS'} posição={'vertical-rl'} height={'150px'} width={'48px'} />
            <div className='Contato'>

              <a href="#">
                <DiscordLogo size={32} className='Discord'/>
              </a>

              <a href="#">
                <LinkedinLogo size={32} className='Linkedin'/>
              </a>

              <a href="#">
                <InstagramLogo size={32} className='Instagram'/>
              </a>

              <a href="#">
                <GithubLogo size={32} className='Github'/>
              </a>
              
              <div/>
            </div>
          </nav>
          <figure></figure>
          <nav className="RightNav">
          <BotaoLink text={'TECNOLOGIAS'} posição={'vertical-lr'} height={'150px'} width={'48px'} />
          </nav>
        </main>

        <footer className="Footer">
          <a>
            <BotaoLink text={'SOBRE'} posição={'horisontal-tb'} height={'48px'} width={'150px'} />
          </a>
          
          <Link to={'Project'}>
            <BotaoLink text={'PROJETOS'} posição={'horisontal-tb'} height={'48px'} width={'150px'} />
          </Link>
          
        </footer>
      </div>
    </body>
  )
}