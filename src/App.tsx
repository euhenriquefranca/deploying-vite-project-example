import { BrowserRouter, Route, Switch} from 'react-router-dom'
import './Globals.scss'

import LandingPage from './Pages/LandingPage/index';
import Home from './Pages/Home/index';
import Sobre from './Pages/Sobre/index';

import Tecnologias from './Pages/Tecnologias/index';
import Projetos from './Pages/Pojetos/index';
import Contato from './Pages/Contato/index'
import spiner from './assets/video/Spiner.gif'



function App() {
  
  return (
    <div className="App">
    {loading ? <img src={spiner} alt="Loading" style={{ width: 250 }}></img> : false}
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/Home" exact component={Home}/>
          <Route path="/Home/Sobre" component={Sobre}/>
          <Route path="/Home/Tecnologias" component={Tecnologias}/>
          <Route path="/Home/Projetos" component={Projetos}/>
          <Route path="/Home/Contato" component={Contato}/>
        </Switch>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
