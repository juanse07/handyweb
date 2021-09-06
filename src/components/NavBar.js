import React, {useState,useEffect} from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
//import Button from './Button.css'
// import { Button } from './Button';
import logomp from '../public1/images/pyme1.png';



function NavBar() {
    const[click,setClick]=useState(false)
    const[button,setbutton]=useState(true)
    const handleClick= ()=> setClick(!click)
    const closeMobilemenu= ()=>setClick(false)
    const showButton =()=>{
        if (window.innerWidth <= 960){
            setbutton(false);
        }else{
            setbutton(true);
        }
        
    };
    useEffect(()=>{
        showButton()
    }, [])
    window.addEventListener('resize',showButton);
    return (
       <>
       <nav className='navbar' >
           <div className='navbar-container'>
           <img src= {logomp} className='navbar-mpicon'  alt='images/img-1.jpg'/>
               
               <Link to='/HOME' className='navbar-logo'onClick={closeMobilemenu}>
                   {/* Oil-now.com<i className='fab fa-typo3' ></i> */}
            Software

               </Link>
               <Link to='/HOME' className='navbar-logo2'onClick={closeMobilemenu}>
                   {/* Oil-now.com<i className='fab fa-typo3' ></i> */}
                   Portafolio
            

               </Link>
               
               <div className='menu-icon' onClick={handleClick}>
                   <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                   </div>
              
               <ul className={click ? 'nav-menu active': 'nav-menu'}> 
               <li className='nav-item'> 
                   <Link to='/HOME' className='nav-links' onClick={closeMobilemenu} >
                       HOME
                   </Link>

               </li>
               <li className='nav-item'>
                   <Link to='/Survey' className='nav-links' onClick={closeMobilemenu}>
                       SERVICES
                   </Link>

               </li>
               <li className='nav-item'>
                   <Link to='/products'className='nav-links' onClick={closeMobilemenu}>
                       Products
                  
                   </Link>

               </li>
               <li>
              <Link
                to='/signup'
                className='nav-links-mobile'
                onClick={closeMobilemenu}
              >
                Sign Up
              </Link>
            </li>
            
               </ul>
              
               {/* {button &&<Button buttonStyle='btn--outline'>
               
               SignUp
                   
               </Button>} */}
              
              

                
              
           </div>
          

       </nav>
       </>
    );
    
}


export default NavBar
