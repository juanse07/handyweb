// const functions = require("firebase-functions");
// const cors= require("cors");
// const express= require("express");
// const Stripe=require("stripe");
// const app=express();

// // app.use(cors({origin: "http://Localhost:3000"}));
// app.use(cors({origin: "https://us-central1-web-1-bd9f8.cloudfunctions.net/app"}));

// app.use(express.json());

// app.post("/paymentIntent", async (req, res) => {
//   const stripe= new Stripe(process.env.REACT_APP_KEY1);
//   try {
//     const {id, amount}=req.body;
//     const payment= await stripe.paymentIntents.create({
//       amount,
//       currency: "usd",
//       description: "Pago de Prueba",
//       payment_method: id,
//       confirm: true,
//     });
//     console.log(payment);
//     console.log(req.body);
//     res.json({message: "Yes I love you"} );
//   } catch (error) {
//     console.log(error, "Hubo un error");
//     res.json({message: error});
//   }
// });

// exports.app = functions.https.onRequest(app);
