import React,{useState} from 'react'
import NavBar from '../NavBar';
import NavBar2 from '../../NavBar2';
import SideBar from '../SideBar';

import InfoSection from '../InfoSection/index';
import { homeObjOne, homeObjTwo,homeObjThree } from '../InfoSection/Data';


const Home=()=>{
    const [isOpen,setIsOpen]=useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen);
    };

return(
    <>
     <SideBar/>

    <NavBar2 toggle={toggle}/>
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <InfoSection {...homeObjThree}/>
    </>
)

};
export default Home;