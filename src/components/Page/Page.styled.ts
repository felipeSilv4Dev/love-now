import styled, { keyframes } from 'styled-components';
import { container } from '../../styles/Container.styled';
import { title } from '../../styles/Title.styled';

export const Container = styled.section`
  ${container}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  height: auto;
`;

export const Title = styled.h1`
  ${title}
  font-size: 8rem;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.light};
  margin-top: 8rem;
`;

export const ContainerImage = styled.div`
  display: grid;

  overflow: hidden;
  height: 80rem;
  border: 11px solid ${({ theme: { colors } }) => colors.dark_2};
  border-radius: 2.3rem;

  /* &::before {
    content: '🤍';
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 5rem;
    position: absolute;
    width: 10rem;
    height: 10rem;
    z-index: 10;
    border-radius: 50%;
    left: -4rem;
    top: -4rem;
    background-image: ${({ theme: { colors } }) => colors.linearPrimary};
    box-shadow: 0 0.5rem 5rem rgba(0, 0, 0, 0.8);
    background-color: transparent;
		} */
`;

const start = keyframes`
0%{
opacity: 0;
transform:translateX(100%)
}

100%{
transform:initial;
opacity: 1;
}

`;

const end = keyframes`
0%{
opacity: 1;
transform:initial
}

100%{
	opacity: 0;
	transform: translateX(-100%);
}

`;
export const Image = styled.img<{ $active: boolean }>`
  grid-area: 1/1;
  opacity: 0;
  animation: ${({ $active }) => ($active ? start : end)} 0.5s
    ${({ $active }) => ($active ? 'forwards' : 'backwards')};
`;
