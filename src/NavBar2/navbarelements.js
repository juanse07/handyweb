import styled  from "styled-components";
import {Link as LinkRouter} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

export const Nav= styled.nav`
background: linear-gradient(
    90deg,
    rgb(153, 152, 152) 0%,
    rgb(10, 10, 10) 100%
  );
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
  
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;

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
  display: flex;
  justify-self: start;
  align-items:center;
  height: 90px;
  width: 150px;


  `
  export const MobileIcon= styled.div`
  display:none;
  @media screen and (max-width:768px){
      display: block;
      position:absolute;
      top:0;
      right:0;
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
  `;

  export const NavName= styled.div`
  display:Flex;
  justify-self: start;
  align-items:center;
  height:100%;`
 
  
