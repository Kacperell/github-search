import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

html {
    --black: #000000;
    --lightGray: #D0D7DE;
    --listItemBorderColor:#C4C4C4;
    --primaryColor:#24292F;
    --darkestGray:#6F7781;
    box-sizing: border-box;

  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    font-family: 'Roboto', sans-serif;  

    font-size: 16px;
  line-height: 24px;
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
