import React from 'react'
import { SideBarContainer,Icon,CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute } from './SideBarElements'

const SideBar = () => {
    return (
        <SideBarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink> About</SideBarLink>
                    <SideBarLink> Hola</SideBarLink>
                    <SideBarLink>Welcome</SideBarLink>
                    <SideBarLink>Bienvenue</SideBarLink>


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
