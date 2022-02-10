import styled from "styled-components";
import Image from './Image'
import { useState } from "react";
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import '/Proyectos React/temp_services/tempser/src/components/Cartspot/Calendar1.css'

// import image1 from "/Proyectos React/temp_services/tempser/src/public1/images/join.svg";
import DonutQuantity from "./DonutQuantity";
import Row from "./Row";


import { useDispatch } from "react-redux";
import { adddate } from "../../../Redux/userlice";





const Shop = styled.div`
  padding: 10px 20px 40px 20px;
`;

const ShopName = styled.h1`
  font-size: 18px;
  color: #111;
  font-style: bold;
  font-variant: normal;
  font-weight: 400;
  line-height: 26.4px;
  margin-bottom: 20px;
`;

const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
export const Horatexto= styled.p`
color:#000;
font-size:13px;
justify-content: center;
 line-height:16px;
 font-weight:700;
 letter-spacing: 1.4px;
text-transform:uppercase;
margin:10px;
`;

const Calendarcontrol = ({titulo2,defaultnumber,img1, onAddDonut, onRemoveDonut, numDonuts }) => {
  const [date, setDate]= useState(new Date());
   const dispatch = useDispatch();
  const onChange= date =>{
    
    setDate(date)

    const date1= date.toDateString()
    dispatch(adddate({date1}))
    console.log(date1)
  
  };
    
        
  

 
  
  
  
    
  return (
    <>
    <Shop>
      <ShopName>{titulo2}</ShopName>
      <Image src={img1} width="150px" height="100px" ></Image>
      <Controls>
      <Calendar onChange={onChange}value={date}></Calendar>
     
        {/* <DonutQuantity
          onAdd={onAddDonut}
          onRemove={onRemoveDonut}
          quantity={numDonuts}
        /> */}
      </Controls>
      <Row>

<Horatexto> {date.toDateString()} </Horatexto> 
</Row>
      
     
      
     
    </Shop>
   

    </>
    
  );
};

export default Calendarcontrol;