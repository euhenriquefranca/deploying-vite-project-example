import React from 'react';
import './style.scss'

import { Link } from 'react-router-dom';
import voltar from '../../assets/images/voltar.png';
import Bootstrap from '../../assets/images/Tecnologias/bootstrap.png'

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

    <div>
      <a href="https://www.hostinger.com.br/tutoriais/o-que-e-html-conceitos-basicos" target="_blank">
        <section className='option'>
          <img src={Html} alt="Html" />
          <h1>HTML</h1>
          <p>Linguagem de marcação</p>
        </section>
      </a>

      <a href="https://www.hostinger.com.br/tutoriais/o-que-e-css-guia-basico-de-css" target="_blank">
        <section className='option'>
          <img src={css} alt="Css" />
          <h1>CSS</h1>
          <p>Linguagem de estilização &#40;suporte ao HTML&#41;</p>
        </section>
      </a>

      <a href="https://www.hostinger.com.br/tutoriais/o-que-e-javascript" target="_blank">
        <section className='option'>
          <img src={JavaScript} alt="Java-Script" />
          <h1>Java Script</h1>
          <p>Linguagem de programação &#40;suporte ao HTML e CSS&#41;</p>
        </section>
      </a>

      <a href="https://www.hostinger.com.br/tutoriais/o-que-e-react-javascript" target="_blank">
        <section className='option'>
          <img src={react} alt="React-Js" />
          <h1>REACT-JS</h1>
          <p>Biblioteca de apoio ao Front-End &#40;suporte ao Java Script Html e css&#41;</p>
        </section>
      </a>

      <a href="https://tecnoblog.net/responde/o-que-e-typescript-guia-para-iniciantes/" target="_blank">
        <section className='option'>
          <img src={TypeScript} alt="TypeScript" />
          <h1>typescript</h1>
          <p>Linguagem de programação com o uso de tipagens &#40;suporte ao React-JS&#41; </p>
        </section>
      </a>

      <a href="https://tipscode.com.br/qual-a-diferencas-entre-sass-e-scss" target="_blank">
        <section className='option'>
          <img src={scss} alt="Scss" />
          <h1>SCSS</h1>
          <p>Linguagem de estilização &#40;extenção do css&#41;</p>
        </section>
      </a>

      <a href="https://segredo.dev/o-que-e-next-js/" target="_blank">
        <section className='option'>
          <img src={next} alt="Next-JS" />
          <h1>NEXT-JS</h1>
          <p>Biblioteca de apoio ao Front-End &#40;extenção do React-Js&#41;</p>
        </section>
      </a>

      <a href="https://www.atlassian.com/br/git/tutorials/what-is-git" target="_blank">
        <section className='option'>
          <img src={git} alt="Git" />
          <h1>GIT</h1>
          <p>Tecnologia de Repositorios</p>
        </section>
      </a>


      <a href="https://www.hostinger.com.br/tutoriais/o-que-github" target="_blank">
        <section className='option'>
          <img src={gitHub} alt="Html" />
          <h1>GITHUB</h1>
          <p>Site de ospedagem de códigos e sites</p>
        </section>
      </a>

      <a href="https://www.hostinger.com.br/tutoriais/o-que-e-bootstrap" target="_blank">
        <section className='option'>
          <img src={Bootstrap} alt="Html" />
          <h1>Bootstrap</h1>
          <p>Framework que facilita a composição do site &#40;Suport ao Front-End&#41;</p>
        </section>
      </a>

  
    </div>

  </div>


</div>
)
}
export default Index;