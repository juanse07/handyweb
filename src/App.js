// import logo from './logo.svg';

import './App.css';
// import NavBar from './components/NavBar';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Products from './components/pages/Products';
// import InfoSection from './components/InfoSection';
import Home from './components/pages/Index';
import React,{useState} from 'react'
// import CheckoutForm from './components/PagosSection/index';
import MainPage from './components/PagosSection/mainpage';
import Cart from './components/Cartspot/index';

import Fg from './components/FormGarden/Fg';
import NavBar2 from './NavBar2';
import SideBar from './components/SideBar';

 


function App() { 
  const [isOpen,setIsOpen]=useState(false);
  const [UserInfo,updateUserInfo]=useState({})
  const toggle=()=>   setIsOpen(!isOpen); 
  return (
    <>
    <Router>

      
   <NavBar2 toggle={toggle} /> 
   <SideBar isOpen={isOpen} toggle={toggle}/>
      <Switch>

      {<Route path='/' exact component={Home} /> }

      <Route path='/checkout'
       component={MainPage} />
       <Route path='/select_service'
       component={Cart} />
       
      </Switch>

       
       </Router> 
       
   
      
     </>
  );
}

export default App;
