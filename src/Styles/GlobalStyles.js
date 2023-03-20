  import { createGlobalStyle } from 'styled-components';
  import background from '../Assets/img.png'
  
  export default createGlobalStyle`
  
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  
  body{
    font-family: 'Titillium Web',sans-serif;
    min-height: 100vh;
    height: 100vh;
    width: 100vw;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position:right;
    background-size:contain;

    @media (max-width: 770px) {
    object-fit:cover;
    background-size:auto;
    background-position:center;
  }
  }
  
  button{
    cursor: pointer;
  }
  
  a{
  text-decoration: none;
  color: #7C3AED;

  }
  
  button{
    border:none;
    cursor: pointer;
  }
  `;