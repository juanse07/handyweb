import styled from "styled-components";
import React, {useState} from "react";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from './Row' 
import { register } from "react-scroll/modules/mixins/scroller";


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
  color: #e1e1e1;
  background-color: transparent;
  border:0.1px solid
  animation: 1ms void-animation-out;
  &::placeholder {
    color: #828282;
  }
  @media screen and(max-width:480px){
    
  
  }
`;

const FormField = ({ label, type, name, placeholder, required, refer }) => {
 
  return (
    <FormFieldContainer>
      
      <Label htmlFor={name}>{label}</Label>
      <Row>
      <Input name={name} type={type} placeholder={placeholder}  ref={refer}/>
      </Row>
      
    </FormFieldContainer>
  );
};

export default FormField;