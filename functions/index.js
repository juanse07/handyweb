const functions = require("firebase-functions");
const cors= require("cors");
const express= require("express");
const Stripe=require("stripe");
const app=express();

// app.use(cors({origin:'http://Localhost:3000'}))
app.use(cors({origin:'https://web-1-bd9f8.web.app'}))

app.use(express.json())
const stripe= new Stripe(process.env.REACT_APP_KEY1); 


app.post('/signup/payment',async (req,res)=>{
    try {
        const{id,amount}=req.body

    const payment= await stripe.paymentIntents.create({
        amount:amount,
        currency: 'usd',
        description:"Pago de Prueba",
        payment_method:id,
        confirm:true
    });
    console.log(payment)
    console.log(req.body)
    res.send({
        clientSecret: payment.client_secret
      });
        
    } catch (error) {
        console.log(error,"Hubo un error")
        res.json({message:error})
    };
    
}
    )
app.listen(8000,()=>console.log("Listening at port 8000"));

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
