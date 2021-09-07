import styled  from "styled-components";
import {Link as LinkRouter} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

export const Nav= styled.nav`
background:#010606;
// background: linear-gradient(
//     90deg,
//     rgb(153, 152, 152) 0%,
//     rgb(10, 10, 10) 100%
//   );
  height: 60px;
//   margin-top:-80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;
  
  @media screen and (max-width: 960px) {
      transition:0.8s all ease;
      
  }`

  export const NavBarContainer= styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 24px;

  height: 80px;
  max-width: 1100px;
  z-index: 1;
  `
  export const NavText1= styled(LinkRouter)`
  color: #ffff;
  justify-self: start;
  margin-left:20px;
  
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  @media screen and (max-width:768px){

    margin-left:120px;
  

  }

  `
  export const NavText2= styled(LinkRouter)`
  color: #05bfa5;
  justify-self: start;
 
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  display: flex;
  align-items: center;
  `

  export const NavIcon= styled.img`
  display: block;
position:absolute;
  justify-self: start;
  align-items:center;
  height: 45px;
  width: 35px;

  bottom:0.4rem;
  left:1.2rem;
  @media screen and (max-width:768px){
    height: 45px;
  width: 35px;
  


  `
  export const MobileIcon= styled.div`
  display:none;
  @media screen and (max-width:768px){
      display: block;
      position:absolute;
      top:1rem;
      right:0.6rem;
      tranform: translate(-100%,60%);
      font-size: 1.8rem;
      cursor:pointer;
      color:#FFF;


  }
  `

  export const NavMenu=styled.ul`
  display:flex;
  align-items:center;
  list-style:none;
  text-align:center;
  margin-right:-22px;
  @media screen and (max-width:768px){
      display:none;
  }
  `

  export const NavItem= styled.li`
  height:80px;`

  export const NavLinks= styled(LinkScroll)`
  color:#fff;
  display:flex;
  align-items:center;
  text-decoration:none;
  padding: 0 1rem;
  height:100%;
  cursor:pointer;
  &.active{
      border-bottom:3px solid #01bf71;
  }
  `

  export const NavName= styled.div`
  display:Flex;
  justify-self: start;
  align-items:center;
  height:100%;
  `

  export const Navbtn=styled.nav`
  display:flex;
  align-items:center
 
  @media screen and (max-width:768px){
    display:none;
}`
 
 export const NavbtnLink= styled(LinkRouter) `
 
 border-radius:50px;
 background:#01bf71;
 white-space:nowrap;
 padding:10px 22px;
 align-items:center;
 justify-content:flex-start;
 display:flex;
 color:#010606;
 font-size:15px;
 outline:none;
 border:none;
 cursor:pointer;
 transition: all 0.2s ease-in-out;
 text-decoration:none;

 &:hover{
    transition: all 0.2s ease-in-out;
    background:#fff;
    color:#010606;
 }
 
 `

