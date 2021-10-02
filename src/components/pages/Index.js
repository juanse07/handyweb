import React,{useState} from 'react'

import NavBar2 from '../../NavBar2/index';
import SideBar from '../SideBar/index';

import InfoSection from '../InfoSection/index';
import { homeObjOne, homeObjTwo,homeObjThree } from '../InfoSection/Data';


const Home=()=>{
    
    
    
    // const [isOpen,setIsOpen]=useState(false);
    // const toggle=()=>   setIsOpen(!isOpen);
    ;
    // const closeMobilemenu= ()=>setIsOpen(false)
return(
    <>
   
     
     
    {/* <SideBar isOpen={isOpen} toggle={toggle}/> */}
{/*  
   <NavBar2 toggle={toggle} />  */}
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <InfoSection {...homeObjThree}/>
    </>
);

};
export default Home;