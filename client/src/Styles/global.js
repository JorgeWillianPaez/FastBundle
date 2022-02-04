import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --lightSalmon: #FCBF6B;
    --lightGray: #A9AD94;
    --brown: #42302E;
    --beige: #F6DAAB;
    --darkYellow: #DABD7B;
    --link: #3D3ABD;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

`;