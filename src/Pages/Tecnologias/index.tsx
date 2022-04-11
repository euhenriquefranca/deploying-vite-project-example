import React from 'react';
import './style.scss'

import { Link } from 'react-router-dom';
import voltar from '../../assets/images/voltar.png';
import Section from '../../Components/Tecnologia/Section' ;

import Html from '../../assets/images/Tecnologias/html-5.png';
import css from '../../assets/images/Tecnologias/css-3.png';
import JavaScript from '../../assets/images/Tecnologias/javascript.png';

import react from '../../assets/images/Tecnologias/react.png';
import scss from '../../assets/images/Tecnologias/sass.png';
import TypeScript from '../../assets/images/Tecnologias/typescript.png';

import next from '../../assets/images/Tecnologias/next-js-logo-8FCFF51DD2-seeklogo.com.png';
import git from '../../assets/images/Tecnologias/git.png';
import gitHub from '../../assets/images/Tecnologias/github.png';

export function Index() {
  


  return(
   <div>

      <Link to="/Home">
       <button>
        <img src={voltar} alt="Voltar" />
       </button>
      </Link>

      <div className='TudoTec'>

        <h1>Minhas tecnologias</h1>

      <div >
        <section className='option'>
          <img src={Html} alt="Html" />
          <h1>HTML</h1>
          <p></p>
        </section>

        <section className='option'>
          <img src={css} alt="Html" />
          <h1>CSS</h1>
          <p></p>
        </section>

        <section className='option'>
          <img src={JavaScript} alt="Html" />
          <h1>Java Script</h1>
          <p></p>
        </section>

        <section className='option'>
          <img src={react} alt="Html" />
          <h1>REACT-JS</h1>
          <p></p>
        </section>

        <section className='option'>
          <img src={TypeScript} alt="Html" />
          <h1>typescript</h1>
          <p></p>
        </section>

        <section className='option'>
          <img src={scss} alt="Html" />
          <h1>SCSS</h1>
          <p></p>
        </section>

        <section className='option'>
          <img src={next} alt="Html" />
          <h1>NEXT-JS</h1>
          <p></p>
        </section>


        <section className='option'>
          <img src={git} alt="Html" />
          <h1>GIT</h1>
          <p></p>
        </section>

        <section className='option'>
          <img src={gitHub} alt="Html" />
          <h1>GITHUB</h1>
          <p></p>
        </section>
          
        {/*HTML*/}
        {/*CSS*/}
        {/*SCSS*/}
        {/*REACTJS*/}
        {/*JAVA-SCRIPT*/}
        {/*TYPESCRIPT*/}
      </div>

      </div>
       

   </div>
  )
}
export default Index;