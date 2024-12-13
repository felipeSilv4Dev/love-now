import { createGlobalStyle } from 'styled-components';
import { container } from './Container.styled';

export const size = {
  desktopL: '160em',
  desktopS: '112.5em',
  largeS: '80em',
  mobileL: '64em',
  mobileS: '48em',
};

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
	${container}
	font-family: "Poppins", sans-serif;
	color: ${({ theme }) => theme.colors.light};
	background-color: ${({ theme }) => theme.colors.dark_linear2};
}

html {
  font-size: 62.5%;
}

img {
  max-width: 100%;
}


@media (min-width:${size.desktopS} ) {
  html {
    font-size: 75%;
  }
}

@media (min-width: ${size.desktopL}) {
  html {
    font-size: 100%;
  }
}

@media (max-width: ${size.mobileS}) {
  html {
    font-size: 50%;
  }

}
`;
