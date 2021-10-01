import React,{useState} from 'react'
import { Button } from '../ButtonElement'
import { MobileIconemail, MobileIconSms, Subtitle } from './InfoElement'
import { Column2, Img, ImgWrap,InfoContainer,InfoWrapper,InfoRow,Column1,TextWrapper,TopLine,Heading,BtnWrap } from './InfoElement'
import {Link} from 'react-router-dom';
import { MobileIcon } from '../../NavBar2/navbarelements';
import { FaSms } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'




const InfoSection=({LightBg,imgStart,topLine,LightText,darkText,HeadLine,description,buttonLabel,img,alt,primary,dark,dark2})=> {
    return (
        <>
        <InfoContainer LightBg={LightBg}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading LightText={LightText}>{HeadLine}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        
                       
                       
                        <BtnWrap>
                            <Button 
                            to="/signup"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        primary={primary ? 1:0}
                        dark={dark? 1:0}
                        dark2={dark2?1:0}>
                                {buttonLabel}
                            </Button>

                            <MobileIconSms>
                            <a href='sms:+17194259412,+573144885217?body=Hello HandyJuan!' classname="iconblock">
                            <FaSms/>
                            
                            </a>                            
                            {/* <a href='sms:+97864903903,+573144885217?body=Hello HandyJuan!'>Click here to text us! </a> */}
                        
                                

                            </MobileIconSms>
                            <MobileIconemail>

                                <a href='mailto:juansegz07s@gmail.com.?body=Need your help HandyJuan!'>  
                                <FiMail/>
                                </a> 

                            </MobileIconemail>
                           
                         
                                
                        

                           
                        </BtnWrap>
                       
                    </TextWrapper>
                   
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt} height='300' width='180'/>
                    </ImgWrap>
                   
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        
            
        </>
    )
}

export default InfoSection;
