import React,{useState,useEffect} from 'react'
import { Button } from '../ButtonElement'
import { MobileIconemail, MobileIconSms, Subtitle } from './InfoElement'
import { Column2, Img, ImgWrap,InfoContainer,InfoWrapper,InfoRow,Column1,TextWrapper,TopLine,Heading,BtnWrap } from './InfoElement'
import {Link} from 'react-router-dom';
import { MobileIcon } from '../../NavBar2/navbarelements';
import { FaProductHunt, FaSms } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import StripeCheckout from 'react-stripe-checkout';
import { loadStripe } from '@stripe/stripe-js';
import { Elements,CardElement } from '@stripe/react-stripe-js';
import {handleSubmit} from'./index'






const InfoSection=({LightBg,imgStart,topLine,LightText,darkText,HeadLine,description,buttonLabel,img,alt,primary,dark,dark2,serviceRate,linkconexion,handleSubmit})=> {
   
    // const [product, setproduct]=useState({
    //     Name: "Deluxe cleaning service",
    //     price:175,
    //     ServiceBy: "HandyJuanServices"

    // })
    // const makePayment= token =>{
    //     const body={
    //         token,product
    //     }
    //     const headers={
    //         "Content-type":"application/json"
    //     }
    //     return fetch(`https://web-1-bd9f8.web.app/payment`,{
    //         method:"POST",
    //         headers,
    //         body:JSON.stringify(body)


    //     }).then(response=>{
    //         console.log("RESPONSE",response)
    //         const{status}=response;
    //         console.log("STATUS",status)
    //     }).catch(error=>console.log(error))
    //     // return fetch(`https://web-1-bd9f8.web.app/payment`)
   
  
    // }
    
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
                      
                      
                         {/* <StripeCheckout 
                        stripeKey='pk_test_51Ji1ywFheOTrxlzRdfq9JLuaWFLqUSr0cLPR1QerlF5ZqlELJ52ap72s9HprUGXnJKHbwWRNPNMI3N2uPgIyrQWP00r8PxU9uc'
                         token={makePayment} 
                          >   */}
                       
                        <BtnWrap>
                            <Button 
                            to={linkconexion}
                        state={serviceRate}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        primary={primary ? 1:0}
                        dark={dark? 1:0}
                        dark2={dark2?1:0}>
                                {buttonLabel}{" from: $  " }{serviceRate}
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
                        

                         {/* </StripeCheckout >   */}
                       
                       
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
