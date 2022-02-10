import styled  from "styled-components";
import {Link as LinkRouter} from 'react-router-dom';


export const Rowbutton = styled.div`
  width: 100%;
  height:80px
  margin: 5px auto;

  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 #f9f9f9;
  border-radius: 4px;
  background-color: transparent;
  position: relative;
  @media screen and(max-width:480px){
    
  
}
`;

export const Button1= styled(LinkRouter)`
border-radius:50px;
width: 100%;

background:#f1f1f1;
white-space:nowrap;
padding:${({big})=>(big ? '14px 48px':'12px 30px')};
color:${({dark})=>(dark ? '#808080':'#808080')};
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
text-decoration:none;
text-decoration:bold;



&:hover{
    transition:all 0.2s ease-in-out;
    background: ${({primary})=>(primary ? "#05bf71" : "#05bf71")};
    color:${({dark})=>(dark ? '#fff':'#fff')};
    text-decoration:none;

}

@media screen and (max-width:768px){

  background:#05bf71;
  color:${({dark})=>(dark ? '#fff':'#fff')};
  
}

`;

export const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;

  & .StripeElement {
    width: 100%;
    padding: 15px;
  }


  }
`;

export const CartContainer=styled.div`
color:#f1f1f1;
background: '#010606';

@media screen and (max-width: 768px){
    padding:35px 0
}
`

export const CartWrapper= styled.div`
display:grid;
z-index:1;
height:860px
width:100%
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding:50px 24px;

justify-content:center
@media screen and (max-width:768px){
  padding:10px 12px;
}
`;

export const CartRow= styled.div`
display:grid;
grid-auto-columns:minmax(auto,1fr);
align-items:center;
grid-template-areas:${({imgStart})=>(imgStart ? `'col1''col2'`:`'col1 col1' 'col2 col2'`)}
// grid-template-areas:${({imgStart})=>(imgStart ? `'col2 col1'`:`'col1 col2'`)};
@media screen and (max-width:768px){
grid-template-areas:${({imgStart})=>(imgStart ? `'col1''col2'`:`'col1 col1' 'col2 col2'`)}

}

`;
export const CartRowtwo= styled.div`
display:grid;
grid-auto-columns:minmax(auto,1fr);
align-items:center;

grid-template-areas:${({imgStart})=>(imgStart ? `'col2 col1 col3 '`:`'col1 col2 col3 '`)};
@media screen and (max-width:768px){
grid-template-areas:${({imgStart})=>(imgStart ? `'col1''col3''col2'`:`'col1 col1'  'col3 col3' 'col2 col2'`)}

}

`;

export const Columncart1= styled.div`
margin-botton:15px;
padding:0 15px;
grid-area: col1;
`;

export const Columncart2= styled.div`
margin-botton:15px;
padding:0 15px;
grid-area: col2;
`;

export const Columncart3= styled.div`
margin-botton:15px;
padding:0 15px;
grid-area: col3;
`;
export const Columncart4= styled.div`
margin-botton:15px;
padding:0 15px;
grid-area: col4;
`;


export const TextWrapper= styled.div`
margin-width:540px;
padding-top:0;
padding-botton:60px;
`;
export const TopLine= styled.p`
color:#01BF71;
font-size:16px;
line-height:16px;
font-weight:700;
letter-spacing: 1.4px;
text-transform:uppercase;
margin-bottom:16px;
`;
export const Heading= styled.h1`
margin-bottom:24px;
font-size:48px
line-height:1.1;
font-weight:600;
color:${({LightText})=>(LightText ? '#f7f8fa':'#010606')};
@media screen and(max-width:480px){
    font-size:32px
}
`;
export const Subtitle= styled.p`
max-width:440px;
color:${({darkText})=>(darkText ? '#010606':'#fff')};
font-size:18px;
line-height:24px;
margin-bottom:35px;
`;

export const BtnWrap=styled.div`
display:flex;
justify-content:space-between;
margin-top:20px;
margin-botton:20px

`;
export const ImgWrap=styled.div`
max-width=355px;
height:100%;
`;
export const Img=styled.img`
width:100%;
margin:40px 10px 10px 10px;

padding-right:0;
`;
