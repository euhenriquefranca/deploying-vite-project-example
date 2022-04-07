import sound from '../../assets/Sound/Sound.mp3';
import React from 'react';
import './style.scss';

import Gif from '../../assets/video/9d8830be7cbdcafbcba2f241d08c12f0ef45107c_00 (1).gif';
import StaticGif from '../../assets/images/Captura_de_tela_2022-04-06_114710-removebg-preview.png';

export function Home() {

  

  const [isStaticGIF, setIsStaticGIF] = React.useState(false);
  const [isPlay, setIsPlay] = React.useState(false);
  const onClickGIF = () =>{

    setIsPlay(!isPlay);
    setIsStaticGIF(!isStaticGIF);
    
  }

  return(
   <div className='Tudo'>


     <header>
       <section>
        <audio src='../' onClick={onClickGIF}>
          <img src={isStaticGIF ? StaticGif : Gif} alt="Descrição da imagem" />
        </audio>
       </section>
     </header>

     
     <main>
        <article>
          <div></div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </article>
          <div className='Center'>
            <h1>Isaac Moretão</h1>
          </div>
        <article></article>
     </main>
       
   
     <footer>

     </footer>
   </div>
  )
}
export default Home;