const functions = require("firebase-functions");
const cors= require("cors");
const express= require("express");
// eslint-disable-next-line max-len
const stripe=require("stripe")("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");
const app=express();
// app.use(cors({origin: "http://localhost:3000"}));
app.use(cors({origin: "https://web-1-bd9f8.web.app"}));
app.use(express.json());

// const PORT= process.env.PORT||4242;


// app.use(cors({origin: "https://us-central1-web-1-bd9f8.cloudfunctions.net/app"}));


// app.use(express.bodyParser());

app.post("/api/payment", async (req, res) => {
  // const stripe= new Stripe(process.env.REACT_APP_KEY1);
  try {
    const {amount, id}=req.body;
    const payment= await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      description: "Pago de ejemplo rosado",
      payment_method: id,
      confirm: true,
    });
    console.log(payment);
    console.log(req.body);
    res.json({message: "Yes I love you"} );
  } catch (error) {
    console.log(error, "Hubo un error");
    res.json({message: error});
  }
});

// app.listen(3001,()=>console.log("Listening at port 3001"));
exports.app = functions.https.onRequest(app);
