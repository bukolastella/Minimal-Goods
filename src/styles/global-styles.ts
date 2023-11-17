import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }


  html,
  body {
    height: 100%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;
    
  }

  body{
    /* background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    --primary-color: red;
      --bg-color: blue;
  --btn-font-size: 18px; */
    /* transition: background 2s, color 2s; */
  }

  a {
      text-decoration: none;
  }

  a {
      text-decoration: none;
  }

  ul {
      list-style: none;
  }

   button{
    border: none;
    cursor: pointer;
    background-color: transparent;
   }

`;
