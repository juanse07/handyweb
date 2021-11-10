// import { Global, css } from "@emotion/core";

const GlobalStyles = () => (
  
    
      `
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
      `
  `
        input,
        button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          outline: none;
          border-style: none;
        }
      `
    
    
      `
        body,
        html {
          background-color: #6772e5;
          font-size: 18px;
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          padding-top: 40px;
        }
      `
    
);

export default GlobalStyles;