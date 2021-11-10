// const cors= require("cors");
// const express= require("express");
// const stripe=require("stripe")("sk_test_51Ji1ywFheOTrxlzRIzM58XIn4qLGa1LtPO336FQlvjF4ledmznhGQqirlMxcf8WmDG9GUm5hIyHNyR5plbCSRlYf00VVlaW7bY");
// const app=express();
// app.use(cors({origin: "http://localhost:3000"}));
// app.use(express.json());

// // const PORT= process.env.PORT||4242;


// // app.use(cors({origin: "https://us-central1-web-1-bd9f8.cloudfunctions.net/app"}));


// // app.use(express.bodyParser());

// app.post("/payment", async (req, res) => {
//   // const stripe= new Stripe(process.env.REACT_APP_KEY1);
//   try {
//     const {amount,id}=req.body;
//     const payment= await stripe.paymentIntents.create({
//       amount,
//       currency: "usd",
//       description: "Pago de ejemplo rosado",
//       payment_method:id,
//        confirm: true,
//     });
//     console.log(payment);
//     console.log(req.body);
//     res.json({message: "Yes I love you"} );
//   } catch (error) {
//     console.log(error, "Hubo un error");
//     res.json({message: error});
//   }
// });

// app.listen(3001,()=>console.log("Listening at port 3001"));


