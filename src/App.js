// import logo from './logo.svg';
import './App.css';
// import NavBar from './components/NavBar';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Products from './components/pages/Products';
// import InfoSection from './components/InfoSection';
import Home from './components/pages/Index';

import Fg from './components/FormGarden/Fg';


function App() {  
  return (
    <>
    <Router>
     
      {/* <Home/> */}
      <Switch>
      {<Route path='/' exact component={Home} /> }

      <Route path='/signup' component={Fg} />
      </Switch>

       
       </Router> 
       
   
      
     </>
  );
}

export default App;
