import React,{useState,useEffect} from 'react'
import { loadStripe } from '@stripe/stripe-js';
import {Elements,CardElement,useStripe,useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

// import PagoForm2 from'./Pagoform'


const PagoForm=()=>{
   

    const CheckOutForm=()=>{
    
        const stripe=useStripe();
        
        const elements=useElements();
        const handleSubmit= async(e)=>{
    
            e.preventDefault();
            const {error,paymentMethod}=await stripe.createPaymentMethod({
                type:"card",
                card:elements.getElement(CardElement)
    
            });

            if(!error){
            
                const { id }=paymentMethod;
            //   const {data}=  await axios.post('http://Localhost:3000/signup/payment',{
                const {data}=  await axios.post('https://web-1-bd9f8.web.app/signup/payment',{
                    id,
                    amount:10000
                });
                console.log(data)
            }
           
        };
        return(
            <form  onSubmit={handleSubmit}>
            <CardElement/>
            <button  type='submit'  onClick={handleSubmit}>
                Buy
            </button>
        </form>

        );

    };

    const stripePromise=loadStripe("pk_test_51Ji1ywFheOTrxlzRdfq9JLuaWFLqUSr0cLPR1QerlF5ZqlELJ52ap72s9HprUGXnJKHbwWRNPNMI3N2uPgIyrQWP00r8PxU9uc")
        
   return(

    <Elements  stripe={stripePromise}>

        <CheckOutForm></CheckOutForm>

    
      
  
   

    </Elements>
    
    
    
   );
    
}



  



export default PagoForm;