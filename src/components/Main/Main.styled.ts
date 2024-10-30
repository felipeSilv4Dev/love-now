import styled, { keyframes } from 'styled-components';

const paragraph = keyframes`
0%{
opacity: 0

}
80%{
	transform: translateX(1rem);
}
100%{
	opacity: 1;
	transform: initial;
}
`;

export const Paragraph = styled.p`
  font-size: 1.8rem;
  transform: translateX(-5rem);
  animation: ${paragraph} 1s forwards;

  @media (max-width: 64em) {
    font-size: 2rem;
  }
`;
