


// import PagoForm2 from'./Pagoform'


        
//     const elements=useElements();


import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import styled from "styled-components";
import axios from "axios";

import Row from "./prebuilt/Row";
import Rowgold from "./prebuilt/Rowgold";
import BillingDetailsFields from "./prebuilt/BillingDetailsFields";
import Cardcomprobantepago from "./prebuilt/Cardcomprobantepago";
import SubmitButton from "./prebuilt/SubmitButton";
import CheckoutError from "./prebuilt/CheckoutError";
import Stripe from "stripe";
import { StripeContainer, StripeRow,StripeWrapper,Columnstripe1,Columnstripe2,BtnWrap,ImgWrap,Img,CardElementContainer } from "./disenoformulariostripe";
import img1 from "/../Proyectos React/temp_services/tempser/src/public1/images/payment1.svg"



const CheckoutForm = ({LightBg,imgStart,topLine,LightText,darkText,HeadLine,description,buttonLabel,img,alt,primary,dark,dark2,serviceRate,handleSubmit, price, onSuccessfulCheckout }) => {
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();

  
  //  price=1;
  
  const stripe = useStripe();
  const elements = useElements();

  // TIP
  // use the cardElements onChange prop to add a handler
  // for setting any errors:

  const handleCardDetailsChange = ev => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

  const handleFormSubmit = async ev => {
    ev.preventDefault();

    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      address: {
        city: ev.target.city.value,
        line1: ev.target.address.value,
        state: ev.target.state.value,
        postal_code: ev.target.zip.value
      }
    };

    setProcessingTo(true);

    const cardElement = elements.getElement("card");
 

   
     

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingDetails
        
      });
      const id= paymentMethodReq.paymentMethod.id

        console.log("payw:",id);

      try {
        // const { data} = await axios.post("http://localhost:3001/payment", {
          const { data} = await axios.post(" https://us-central1-web-1-bd9f8.cloudfunctions.net/app/api/payment", {
            // const { data} = await axios.post(" https://www.thehandyjuan.com/api/payment", {
         


          id,
          // amount: price * 100,
          amount: serviceRate * 100,
          
          
          
          
        });

         console.log("paymentid:",data);



      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setProcessingTo(false);
        return;
      }

     

        
      
     


    

      // const { error,confirmacion } = await  stripe.confirmCardPayment(clientSecret, {
      //   payment_method: paymentMethodReq.paymentMethod.id
      // });

     

      // if (error) {
      //   setCheckoutError(error.message);
      //   setProcessingTo(false);
      //   return;
      // }

      onSuccessfulCheckout();
    } catch (err) {
      setCheckoutError(err.message);
    }
  };

  // Learning
  // A common ask/bug that users run into is:
  // How do you change the color of the card element input text?
  // How do you change the font-size of the card element input text?
  // How do you change the placeholder color?
  // The answer to all of the above is to use the `style` option.
  // It's common to hear users confused why the card element appears impervious
  // to all their styles. No matter what classes they add to the parent element
  // nothing within the card element seems to change. The reason for this is that
  // the card element is housed within an iframe and:
  // > styles do not cascade from a parent window down into its iframes

  const iframeStyles = {
    base: {
      color: "#828282",
      fontSize: "16px",
      iconColor: "#828282",
      "::placeholder": {
        color: "#05bf71"
      }
    },
    invalid: {
      iconColor: "#ff0000",
      color: "#ff0000"
    },
    complete: {
      iconColor: "#05bf71"
    }
  };

  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true
  };
  

  return (
    <>
    <StripeContainer >
     
        <StripeWrapper>
            <StripeRow >
                <Columnstripe1>
                <Rowgold>
                  <Cardcomprobantepago></Cardcomprobantepago>
                  <p>data1</p>
                  
                </Rowgold>
                <form onSubmit={handleFormSubmit}>

                <BillingDetailsFields />
               
               
                <Row>
                <CardElementContainer>
           <CardElement
             options={cardElementOpts}
             onChange={handleCardDetailsChange}
           />
         </CardElementContainer>

         </Row>
         {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}

                

                

               
                  
                  
                   
                   


                    
                    

                  
                   
                   
                
               </form>
                </Columnstripe1>
                <Columnstripe2>
                <ImgWrap>
                <Img src={img1} alt="" height='300' width='180'/>
                </ImgWrap>
                <BtnWrap>
                        <SubmitButton
                       
                       disabled={isProcessing || !stripe}>

              {isProcessing ? "Processing..." : `Pay $${serviceRate}`}
                        </SubmitButton>
           
                    

                       
                    </BtnWrap>
               
                </Columnstripe2>
            </StripeRow>
        </StripeWrapper>
    </StripeContainer>
    
        
    </>
    // <form onSubmit={handleFormSubmit}>
    //   <Row>
    //     <BillingDetailsFields />
    //   </Row>
    //   <Row>
    //     <CardElementContainer>
    //       <CardElement
    //         options={cardElementOpts}
    //         onChange={handleCardDetailsChange}
    //       />
    //     </CardElementContainer>
    //   </Row>
    //   {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
    //   <Row>
    //     {/* TIP always disable your submit button while processing payments */}
    //     <SubmitButton disabled={isProcessing || !stripe}>
    //       {isProcessing ? "Processing..." : `Pay $${price}`}
    //     </SubmitButton>
    //   </Row>
    // </form>
  );
};

export default CheckoutForm;