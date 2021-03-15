import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap&subset=latin-ext');

*,*::before,*::after {
  box-sizing: border-box;
  padding:0;
  margin:0;
}
html{
  font-size:62.5%; //10px all fonts
}


body {
font-size: 1.6rem;
font-family: 'Montserrat', sans-serif;
}
`;
export default GlobalStyle;
