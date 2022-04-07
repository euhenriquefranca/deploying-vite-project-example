import { BrowserRouter, Route, Switch} from 'react-router-dom'

import LandingPage from './Pages/LandingPage/index';
import Home from './Pages/Home/index';
import './Globals.scss'


function App() {
  return (
    <div className="App">

      <BrowserRouter>
         <Route path="/" exact component={LandingPage}/>
         <Route path="/Home" component={Home}/>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
