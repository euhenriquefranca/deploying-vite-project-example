import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './Globals.scss';

import LandingPage from './Pages/LandingPage/index';
import Home from './Pages/Home/index';
import Sobre from './Pages/Sobre/index';

import Tecnologias from './Pages/Tecnologias/index';
import Projetos from './Pages/Pojetos/index';
import Contato from './Pages/Contato/index';

import Work from './Pages/Trabalho/Inner';



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/exemple" exact component={LandingPage}/>
          <Route path="/Home" exact component={Home}/>
          <Route path="/Home/Sobre" component={Sobre}/>
          <Route path="/Home/Tecnologias" component={Tecnologias}/>
          <Route path="/Home/Projetos" component={Projetos}/>
          <Route path="/Home/Contato" component={Contato}/>
          <Route path="/Home/Trabalho" component={Work}/>
        </Switch>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
