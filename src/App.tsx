import { BrowserRouter, Route, Switch} from 'react-router-dom'

import LandingPage from './Pages/LandingPage/index';
import Home from './Pages/Home/index';
import Sobre from './Pages/Sobre/index';
import Tecnologias from './Pages/Tecnologias/index';
import './Globals.scss'


function App() {
  return (
    <div className="App">

      <BrowserRouter>
         <Route path="/" exact component={LandingPage}/>
         <Route path="/Home" exact component={Home}/>
         <Route path="/Home/Sobre" component={Sobre}/>
         <Route path="/Home/Tecnologias" component={Tecnologias}/>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
