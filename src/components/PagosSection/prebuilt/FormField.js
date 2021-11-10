import styled from "styled-components";
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
`;

const Label = styled.label`
  width: 20%;
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
  padding: 11px 15px 11px 8px;
  border-radius: 4px;
  color: #e1e1e1;
  background-color: transparent;
  animation: 1ms void-animation-out;
  &::placeholder {
    color: #828282;
  }
`;

const FormField = ({ label, type, name, placeholder, required }) => {
  return (
    <FormFieldContainer>
      <Label htmlFor={name}>{label}</Label>
      <Row>
      <Input name={name} type={type} placeholder={placeholder} required  />
      </Row>
    </FormFieldContainer>
  );
};

export default FormField;