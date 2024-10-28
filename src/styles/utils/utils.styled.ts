import styled, { keyframes } from 'styled-components';

const startButton = keyframes`
	0% {
  bottom: -2rem;
	opacity: 0
	}

	100% {
		bottom: 0;
  	opacity:1;
	}
`;
export const Button = styled.button`
  all: unset;

  background-image: linear-gradient(
    to left bottom,
    ${({ theme }) => theme.colors.col_3},
    ${({ theme }) => theme.colors.col_4}
  );
  margin-top: 4rem;
  font-size: 2rem;
  font-weight: bold;
  padding: 1.5rem 3rem;
  display: block;
  border-radius: 3.2rem;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
  opacity: 0;
  animation: ${startButton} 0.3s 1s forwards;

  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 3.2rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
    background-image: linear-gradient(
      to left bottom,
      ${({ theme }) => theme.colors.col_3},
      ${({ theme }) => theme.colors.col_4}
    );
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }

    &:active {
      transform: translateY(-2px);
    }
  }
`;
