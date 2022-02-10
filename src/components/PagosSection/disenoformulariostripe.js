import styled  from "styled-components";
import {Link as LinkRouter} from 'react-router-dom';


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

export const StripeContainer=styled.div`
color:#f1f1f1;
background: '#010606';
@media screen and (max-width: 768px){
    padding:0px 0
}
`

export const StripeWrapper= styled.div`
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

export const StripeRow= styled.div`
display:grid;
grid-auto-columns:minmax(auto,1fr);
align-items:center;
grid-template-areas:${({imgStart})=>(imgStart ? `'col2 col1'`:`'col1 col2'`)};
@media screen and (max-width:768px){
grid-template-areas:${({imgStart})=>(imgStart ? `'col1''col2'`:`'col1 col1' 'col2 col2'`)}

}

`;
export const Columnstripe1= styled.div`
margin-botton:15px;
padding:0 15px;
grid-area: col1;
`;

export const Columnstripe2= styled.div`
margin-botton:15px;
padding:0 15px;
grid-area: col2;
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
margin-top:30px;
margin-botton:10px
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



// export const MobileIconSms= styled.div`
// margin-left:15px

//   display:flex;
//   justify-content:flex-start;
//     tranform: translate(-100%,60%);
//     font-size: 1.8rem;
//     cursor:pointer;
//     text-decoration:none
//     color:#fff
    

// `;
// export const MobileIconemail= styled.div`
// margin-left:15px

//   display:flex;
//   justify-content:flex-start;
//     tranform: translate(-100%,60%);
//     font-size: 1.8rem;
//     cursor:pointer;
//     text-decoration:none
//     color:#fff
    

// `;