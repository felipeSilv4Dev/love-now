import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background-color:  ${({ theme }) => theme.colors.dark};
	color: ${({ theme }) => theme.colors.light};

}


html {
  font-size: 62.5%;
}

img {
  max-width: 100%;
}


@media (min-width: 112.5em) {
  html {
    font-size: 75%;
  }
}

@media (min-width: 160em) {
  html {
    font-size: 100%;
  }
}

@media (max-width: 48em) {
  html {
    font-size: 50%;
  }

}
`;
