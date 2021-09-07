// import logo from './logo.svg';
import './App.css';
// import NavBar from './components/NavBar';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Products from './components/pages/Products';
// import InfoSection from './components/InfoSection';
import Home from './components/pages/Index';


function App() {  
  return (
    <>
    <Router>
     
      <Home/>

       
       </Router> 
       
   
      
     </>
  );
}

export default App;
