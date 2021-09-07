import React from 'react'
import { Nav,NavBarContainer, NavIcon, NavText1, NavText2,MobileIcon,NavMenu,NavItem,NavLinks,NavName, Navbtn, NavbtnLink } from './navbarelements'
import icon from '../public1/images/hummer1.png'
import {FaBars} from 'react-icons/fa'


const NavBar2 = () => {
    return (
        <>
        <Nav>
            <NavBarContainer>
                <NavIcon src={icon}></NavIcon>
                
                <NavName>
                <NavText1>Handy</NavText1>
                <NavText2>Juan</NavText2>
                </NavName>

                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>
                            ABOUT
                        </NavLinks>       
                    </NavItem>
                    <NavItem>
                        <NavLinks to='about'>
                            HIRE
                        </NavLinks>       
                    </NavItem>
                    <NavItem>
                        <NavLinks to='about'>
                            GET HIRE
                        </NavLinks>       
                    </NavItem>
                    <NavItem>
                        <NavLinks to='about'>
                            VACANTS
                        </NavLinks>       
                    </NavItem>
                    <Navbtn>
                    <NavbtnLink to='/signIn'>

                        Sign In

                    </NavbtnLink>
                </Navbtn>
                </NavMenu>
              
                <MobileIcon>
                    <FaBars/>
                </MobileIcon>
            </NavBarContainer>
            
        </Nav>
        </>
    )
}

export default NavBar2
