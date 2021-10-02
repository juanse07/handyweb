import React from 'react'
import { SideBarContainer,Icon,CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute, txlink } from './SideBarElements'
import { FaSms } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { GoHome } from 'react-icons/go'
// import {GoHome} from 'react-icons/go'
const SideBar = ({isOpen,toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink onClick={toggle} >
                        <txlink>
                            Chat with us vis Sms

                        </txlink>
                      
                     <a href='sms:+17194259412,+573144885217?body=Hello HandyJuan!' classname="iconblock">
                             <FaSms/>
                            
                             </a>    
                    
                    </SideBarLink>
                    <SideBarLink onClick={toggle}>

                    <txlink>
                           Send us an Email

                        </txlink>
                   
                    <a href='mailto:juansegz07s@gmail.com.?body=Need your help HandyJuan!'>  
                                <FiMail />
                                </a> 
                    
                    </SideBarLink>
                    <SideBarLink onClick={toggle}>
                    <txlink>
                           Welcome

                        </txlink>
                        <GoHome/>
                   
                    </SideBarLink>
                    <SideBarLink onClick={toggle}>
                    <txlink>
                            on Board

                        </txlink>
                        <GoHome/>
                    
                    </SideBarLink>


                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute>
                        Sign In
                    </SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
            
        </SideBarContainer>
    )
}

export default SideBar
