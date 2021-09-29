import React,{useState} from 'react'
import { Button } from '../ButtonElement'
import { Subtitle } from './InfoElement'
import { Column2, Img, ImgWrap,InfoContainer,InfoWrapper,InfoRow,Column1,TextWrapper,TopLine,Heading,BtnWrap } from './InfoElement'
import {Link} from 'react-router-dom';




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
