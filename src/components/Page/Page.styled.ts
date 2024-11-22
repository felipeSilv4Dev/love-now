import styled, { keyframes } from 'styled-components';
import { container } from '../../styles/Container.styled';
import { title } from '../../styles/Title.styled';

export const Container = styled.section`
  ${container}
  height: auto;
  padding: 12rem 0;
`;
export const PhotosBox = styled.div`
  display: flex;
  width: max-content;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  gap: 2rem;
`;

export const ContainerImage = styled.div`
  display: grid;
  overflow: hidden;
  height: 80rem;
  border: 10px solid ${({ theme: { colors } }) => colors.dark_2};
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

export const Name = styled.h3`
  position: absolute;
  z-index: 10;
  background-color: ${({ theme: { colors } }) => colors.dark_1};
  font-size: 1.8rem;
  padding: 1rem 1.5rem;
  border-radius: 6rem;
  border: 2px solid ${({ theme: { colors } }) => colors.cor_1};
  bottom: 10rem;
  left: -4rem;
`;

export const Control = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const Index = styled.span<{ $active: boolean }>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  transition: all 0.2s;
  background-color: ${({ theme: { colors }, $active }) =>
    $active ? colors.cor_1 : colors.dark_1};
  cursor: pointer;
`;
