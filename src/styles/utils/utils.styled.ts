import { Link } from 'react-router-dom';
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

export const Button = styled(Link)<{ $animation?: boolean }>`
  all: unset;

  background-image: linear-gradient(
    to left bottom,
    ${({ theme }) => theme.colors.col_3},
    ${({ theme }) => theme.colors.col_4}
  );
  margin-top: 4rem;
  font-size: 1.8rem;
  padding: 1.5rem 3rem;
  display: block;
  border-radius: 3.2rem;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
  opacity: ${(props) => (props.$animation ? 0 : 1)};
  animation: ${(props) => props.$animation && startButton} 0.3s 1s forwards;

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

  @media (max-width: 64em) {
    font-size: 2rem;
  }
`;

export const Container = styled.section<{ $bg?: string }>`
  display: block;
  background-image: linear-gradient(
      to left bottom,
      ${({ theme }) => theme.colors.col_1},
      ${({ theme }) => theme.colors.col_2}
    ),
    url(${(props) => props.$bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 90vh;
  position: relative;

  @media (max-width: 64em) {
    height: 75vh;
  }
`;

export const TextBox = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;
  gap: 1.5rem;
`;

const title = keyframes`
0%{
opacity: 0

}
80%{
	transform: translateX(-1rem);
}
100%{
	opacity: 1;
	transform: initial;
}
`;

export const Title = styled.h1<{ $animation?: boolean }>`
  font-size: 10rem;
  transform: translateX(5rem);
  animation: ${(props) => props.$animation && title} 1s forwards;

  @media (max-width: 64em) {
    font-size: 8rem;
  }
`;
