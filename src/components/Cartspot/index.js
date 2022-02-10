import { useState,useContext } from "react";
// import Router from "next/router";
import {db} from '../../firebase/config'
import Calendar from "react-calendar";
import Layout from "../PagosSection/Pagoform";
import Row from "../PagosSection/prebuilt/Row";
import DonutShop from "../PagosSection/prebuilt/DonutShop";
import Timestartcontrol from "../PagosSection/prebuilt/timestartcontrol";
import Calendarcontrol from "../PagosSection/prebuilt/calendarcontrol";
import styled from "styled-components";
import { datacart1,datacart2,datacart3,datacart4,datacart5 } from "./Data2";
import  {Button1,Rowbutton}  from "./cartelement";
import { CartContainer, CartRow,CartRowtwo,CartWrapper,Columncart1,Columncart2,Columncart3,BtnWrap,ImgWrap,Img,CardElementContainer } from "./cartelement";
import BillingDetailsFields from "../PagosSection/prebuilt/BillingDetailsFields";
import {useForm} from 'react-hook-form';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { update,addhours } from "../../Redux/userlice";
import TimeQuantity from "../PagosSection/prebuilt/Timequantity";
import { useHistory } from "react-router-dom";

// import CheckoutForm from "../components/CheckoutForm";
// import getDonutPrice from "../utils/get-donut-price";
// import getDonutPrice from "./getprice";
const FormFieldContainer = styled.div`
display: -ms-flexbox;
display: flex;
-ms-flex-align: center;
align-items: center;
overflow: hidden;
margin-left: 15px;
border-top: 0.2px solid ;
&:first-of-type {
  border-top: 0.2px;
}
@media screen and(max-width:480px){
  

}
`;

const Label = styled.label`
width: 10%;
margin-left:10px;
min-width: 70px;
padding: 11px 0;
color:#000000;
overflow: hidden;
font-size: 16px;
text-overflow: ellipsis;
white-space: nowrap;
font-weight: bold;


`;

const Input = styled.input`
font-size: 16px;

width: 100%;
padding: 8px 15px 8px 15px;
border-radius: 4px;
color: #828282;
background-color: transparent;
border:0.1px solid
animation: 1ms void-animation-out;
&::placeholder {
  color: #e1e1e1;
}
@media screen and(max-width:480px){
  

}
`;

 
 


const Cart = ({titulo2,defaultnumber,img1,linkconexion1,buttonlabel,primary,dark2,dark}) => {

 
  const [numDonuts, setNumDonuts] = useState(1);
  const [numDonuts2, setNumDonuts2] = useState(1);
  const [numDonuts3, setNumDonuts3] = useState(1);
  const [numDonuts4, setNumDonuts4] = useState(30);
  
  
  
  const [name, setName]=useState("");
  const[email, setEmail]=useState("");
  const [lname, setLname]=useState("");
  const[address, setAddress]=useState("");
  const [phone, setPhone]=useState("");

  const name1= useSelector((state) => state.user.name);
  const lname1=useSelector((state) => state.user.lname);
  const email1=useSelector((state) => state.user.email);
  const phone1=useSelector((state) => state.user.phone);
  const address1=useSelector((state) => state.user.address);
 
  const dispatch = useDispatch();
  let history = useHistory();
  // const onChange= () =>{setDate(date)};
  const addDonut = () => setNumDonuts(num => Math.min(5, num + 1));
  const remDonut = () => setNumDonuts(num => Math.max(1, num - 1));
  const addDonut2 = () => setNumDonuts2(num => Math.min(5, num + 1));
  const remDonut2 = () => setNumDonuts2(num => Math.max(0, num - 1));
  const addDonut3 = () => setNumDonuts3(num => Math.min(18, num + 1));
  const remDonut3 = () => setNumDonuts3(num => Math.max(8, num - 1));
  const addDonut4 = () => setNumDonuts4(num => Math.min(59, num + 15));
  const remDonut4 = () => setNumDonuts4(num => Math.max(0, num - 15));
  
      
    
   
     
  
 

  const handleUpdate=(event)=>{
    event.preventDefault();
    
    dispatch(update({numDonuts2,name,lname,phone,address,email,numDonuts3,numDonuts4}))
    dispatch((addhours({numDonuts})))
    history.push("/checkout");
  };

 


 

  

 
  
    
  
  // user= [
  //   {
  //     name:name,
  //     lname:lname,
  //     Phone:phone,
  //     Address:address,
  //     Email:email,
      
  //   }
  // ]

  
  return (
      //   <CheckoutForm
      //   price={getDonutPrice(numDonuts)}
      //   onSuccessfulCheckout={() => Router.push("/success")}
      // />   
     

<>
<CartContainer >
 
    <CartWrapper>
        <CartRowtwo >
            <Columncart1>

            
<form>
        <FormFieldContainer>
         <Label htmlFor= "Name"> First Name </Label>
        <Row>
          <Input type="email" placeholder="pepe" onChange= {(event)=>setName(event.target.value)} />
        </Row>
       </FormFieldContainer>
       <FormFieldContainer>
       <Label htmlFor= "Name"> Last Name </Label>
        <Row>
         <Input type="text" placeholder="perez" onChange={(event)=>setLname(event.target.value)}  />
        </Row>
       </FormFieldContainer>
       <FormFieldContainer>
       <Label htmlFor= "Email"> Email </Label>
        <Row>
         <Input type="email" placeholder="@gmail" onChange={(event)=>setEmail(event.target.value)}  />
        </Row>
       </FormFieldContainer>
       <FormFieldContainer>
       <Label htmlFor= "phone"> Phone </Label>
        <Row>
         <Input type="phone" placeholder="4112142" onChange={(event)=>setPhone(event.target.value)} />
        </Row>
       </FormFieldContainer>

       <FormFieldContainer>
       <Label htmlFor= "Address"> Address </Label>
        <Row>
         <Input type="text" placeholder="castilla"onChange={(event)=>setAddress(event.target.value)} />
        </Row>
        
       
       </FormFieldContainer>
   
       {/* <Input onClick={handleUpdate} type="submit" /> */}

       </form>
       


           
           
           
            
       {/* <CardElement
         options={cardElementOpts}
         onChange={handleCardDetailsChange}
       /> */}
     
     {/* {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>} */}

            

            

           
              

            </Columncart1>
            <Columncart2>
           
            <Row>
              <Calendarcontrol {...datacart4}
      // price={getDonutPrice(numDonuts)}
          //  onAddDonut={addDonut}
          // onRemoveDonut={remDonut}
          // numDonuts={numDonuts} 
          
        />
       
      </Row>
            <Row>
        <DonutShop{...datacart1}
        // price={getDonutPrice(numDonuts)}
          onAddDonut={addDonut}
          onRemoveDonut={remDonut}
          numDonuts={numDonuts}
        />
      </Row>
     

      <BtnWrap>
      
        <Button1 
        type="submit"
        onClick={handleUpdate}
        to='/checkout'>
       
          Save & Next

        </Button1>
        </BtnWrap>
        

           
            </Columncart2>
            <Columncart3>

            <Row>
        <DonutShop{...datacart2}
         onAddDonut={addDonut2}
         onRemoveDonut={remDonut2}
         numDonuts={numDonuts2}/>
      </Row>
     

            <Row>
        <Timestartcontrol{...datacart3}
         onAdd_1={addDonut3}
         onRemove_2={remDonut3}
         numDonuts_3={numDonuts3}
         onAdd_4={addDonut4}
         onRemove_5={remDonut4}
         numDonuts_6={numDonuts4}/>
        
         </Row>
         <Row>

        
      </Row>
            
            </Columncart3>
        </CartRowtwo>
    </CartWrapper>
</CartContainer>

    
</>
    
  );
};




export default Cart;