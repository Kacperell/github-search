import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  html {
    --black: #24292f;
    --gray: #57606a;
    --primaryColor:#24292f;
    box-sizing: border-box;
    font-size: 12px;

  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    font-size: 1.5rem;
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    line-height:2;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    text-decoration: underline;
  }

  .container{
    width: 1100px;
    max-width:95%;
    margin:auto;
  }
`

export default GlobalStyle
