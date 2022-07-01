import { InicialPage } from "./Pages/InicialPage/index";
import './globals.scss';
import { Home } from './Pages/Home/Index';
import { Route, Routes } from "react-router-dom";
import { Project } from "./Pages/Projeto/index";
import Contato from "./Pages/Contato/index";
import { Tecnologias } from "./Pages/tecnologias/index";
import { Sobre } from "./Pages/Sobre";

 function Rotas() {

  return (
    <Routes>
      <Route path="/" element={<InicialPage/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Home/Project" element={<Project/>}/>
      <Route path="/Home/Contato" element={<Contato/>}/>
      <Route path="/Home/Tecnologias" element={<Tecnologias/>} />
      <Route path="/Home/Sobre" element={<Sobre/>} />
    </Routes>
  )
}
export default Rotas;