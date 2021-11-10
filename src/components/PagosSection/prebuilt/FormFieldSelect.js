import styled from "styled-components";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css'
import Row2 from './Row2' 



const FormFieldContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 15px;
  border-top: 2px solid ;
  &:first-of-type {
    border-top: 15px;
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

const input = styled.input`
  font-size: 16px;
  width: 100%;
  
  color: #000000;
  background-color: transparent;
  animation: 1ms void-animation-out;
  &::placeholder {
    color: #828282;
  }
`;

  

const cities = [
  { label: "Orlando, FL", value: 1, classname:{input} },
  { label: "Kissimee, FL", value: 1,classname:{input} },
  { label: "Denver,CO", value: 2, classname:{input} },
  { label: "Littleton,CO", value: 3, classname:{input} },
  { label: "Aurora,CO", value: 3,classname:{input} },

];

// export default () => (
//   <Select
//     defaultValue={items[0]}
//     label="Single select"
//     options={items}
//     styles={colourStyles}
//   />
// );

const FormFieldSelect = ({ label, type, name, placeholder, required }) => {
  return (
    <FormFieldContainer>
      <Label htmlFor={name}>{label}</Label>


      <Row2>
      <Select defaultValue={cities[1]}
    
    options={cities}
    disabledKeyboardNavigation
    
     required  />
     </Row2>
    </FormFieldContainer>
  );
};

export default FormFieldSelect;