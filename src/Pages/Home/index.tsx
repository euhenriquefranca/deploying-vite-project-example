import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom'

import Gif from '../../assets/video/9d8830be7cbdcafbcba2f241d08c12f0ef45107c_00 (1).gif';
import StaticGif from '../../assets/images/Captura_de_tela_2022-04-06_114710-removebg-preview.png';
import gitHub from '../../assets/images/github.png';

import Instagram from '../../assets/images/instagram-logo.png';
import Linkedin from '../../assets/images/linkedin.png';


export function Home() {

  
//const [isPlay, setIsPlay] = React.useState(false);
  const [isStaticGIF, setIsStaticGIF] = React.useState(false);
  
  const onClickGIF = () => setIsStaticGIF(!isStaticGIF);


  return(
   <div className='Tudo'>


     <header>
       <section>
        <audio src='../../Sound.mp3' ></audio>
          <img onClick={onClickGIF} src={isStaticGIF ? StaticGif : Gif} alt="Descrição da imagem" />
        
       </section>
     </header>

     
     <main>
        <article className='Left'>
          <section>
            <a href="https://github.com/IsaacMoretao" target={'_blank'} >
            <img src={gitHub}  alt="" />
          </a>
          <a href="">
            <img src={Instagram} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/isaac-hana-moret%C3%A3o-1a32031a2/" target={'_blank'}>
            <img src={Linkedin} alt="" />
          </a>
          
          <div></div>
          </section>
          
        </article>
          <div className='Center'>
            <h1>Isaac Moretão</h1>
          </div>
        <article className='Left'>
          <section>
            Projects
          </section>

        </article>
     </main>
       
     <footer>

       <Link to="/Home/Sobre">
        <h1>Sobre</h1>
       </Link>
       <Link to="/Home/Tecnologias" >
        <h1>Tecnologias</h1>
       </Link>

       
     </footer>
     
   </div>
  )
}
export default Home;