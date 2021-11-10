// const cors= require("cors");
// const express= require("express");
// const stripe=require("stripe")("sk_test_51Ji1ywFheOTrxlzRIzM58XIn4qLGa1LtPO336FQlvjF4ledmznhGQqirlMxcf8WmDG9GUm5hIyHNyR5plbCSRlYf00VVlaW7bY");
// const uuid=require("uuid/v5");



// const app= express();

// app.use(express.json())
// app.use(cors())

// // app.get("/",(req,res)=>{
// //     res.send("my Server Works");
// // });

// app.post('/payment',(req,res)=>{
//     const {product,token}=req.body;
//     console.log("PRODUCT",product);
//     console.log("PRICE", product.price);
//     const idempontencyKey=uuid()

//     return stripe.customers.create({
//         email:token.email,
//         source:token.id
        
//     }).then(customer=>{stripe.charges.create({
//         amount:product.price*100,
//         currency:'usd',
//         customer:customer.id,
//         receipt_email:token.email,
//         description:`Purchase of product.name`,
//         shipping:{
//             name: token.card.name,
//             address:{
//                 country:token.card.address_country
//             }
//         }
//     },{idempontencyKey})
// })

// .then(result=>res.status(200).json(result))
// .catch(err=>console.log(err));

// });




    


// app.listen(5000,()=>console.log("Listening at port 5000"));