import styled from "styled-components";

const SubmitButton = styled.button`

border-radius:50px;
width: 100%;
background-color: ${props => (props.disabled ? "#05bf71" : "#010606")};
white-space:nowrap;
padding:${({big})=>(big ? '14px 48px':'12px 30px')};
color:${({dark})=>(dark ? '#05bf71':'#05bf71')};
font-size:${({fontbig})=>(fontbig ? '20px':'16px')};
font-weight: 600;
box-shadow: ${props =>
     props.disabled
         ? "none"
         : "0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08), inset 0 1px 0 #f9f9f9;"};
outline:none;
border:none;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
transition:all 0.2s ease-in-out; 
text-decoration:bold;


&:hover{
    transition:all 0.2s ease-in-out;
    background: ${({primary})=>(primary ? "#05bf71" : "#010606")};

}

`;

// const SubmitButton = styled.button`
//   display: block;
//   height: 40px;
//   width: 100%;
//   font-size: inherit;
//   background-color: ${props => (props.disabled ? "#828282" : "#05bf71")};
//   box-shadow: ${props =>
//     props.disabled
//       ? "none"
//       : "0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08), inset 0 1px 0 #ffb9f6;"};
//   border-radius: 4px;
//   opacity: ${props => (props.disabled ? 0.5 : 1)};
//   color: #fff;
//   font-weight: 600;
//   cursor: pointer;
// `;

export default SubmitButton;