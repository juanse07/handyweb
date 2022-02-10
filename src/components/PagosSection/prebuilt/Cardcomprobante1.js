import styled from "styled-components";
import React, {useState} from "react";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from './Row' 




  

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
  width: 35%;
  margin-left:10px;
  min-width: 30px;
  padding: 4px 0;
  color:#d58b07;
  overflow: hidden;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
  @media screen and(max-width:480px){

    font-size: 9x;
    
    
  
  }
  

`;

const Datapago = styled.h1`
width: 65%;
margin-left:10px;

min-width: 30px;
padding: 8px 0;
color:#000000;
overflow: hidden;
font-size: 16px;
text-overflow: ellipsis;
white-space: nowrap;
@media screen and(max-width:480px){

  font-size: 9px;
  
  

}

`;

const Cardcomprobante1 = ({ label, type, name, placeholder, required,value }) => {

 
 
  return (
    <FormFieldContainer>
      
      <Label htmlFor={name}>{label}</Label>
      
      <Datapago>
       {/* {numDonuts1} {email1}  {numDonuts2}  {name1} {lname1} {address1} {phone1} */}
       {value}
        
      </Datapago>
      
      
    </FormFieldContainer>
  );
};

export default Cardcomprobante1;