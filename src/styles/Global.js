import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, input, button {
    color: #555555;
    font-family: 'Montserrat', sans-serif;
  }

  a {
    color: #555555;
    text-decoration: none;
    transition: 0.3s ease-in;
  }
`;
