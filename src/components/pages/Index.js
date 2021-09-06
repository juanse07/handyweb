import React,{useState} from 'react'
import NavBar from '../NavBar';

import InfoSection from '../InfoSection/index';
import { homeObjOne, homeObjTwo,homeObjThree } from '../InfoSection/Data';


const Home=()=>{
    const [isOpen,setIsOpen]=useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen);
    };

return(
    <>
    <NavBar toggle={toggle}/>
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <InfoSection {...homeObjThree}/>
    </>
)

};
export default Home;