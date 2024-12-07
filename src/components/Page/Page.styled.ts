import styled, { css, keyframes } from 'styled-components';
import { container } from '../../styles/Container.styled';
import { size } from '../../styles/Global.styled';

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

const width = keyframes`
from{
width:0;}
to{
width:100%;
}

`;

const flex = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.section`
  ${container}
  height: auto;
  padding: 12rem 3rem;
`;
export const PhotosBox = styled.div`
  ${flex}
  width: max-content;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  position: relative;
  gap: 2rem;
`;

export const ContainerImage = styled.div`
  display: grid;
  overflow: hidden;
  border: 5px solid ${({ theme: { colors } }) => colors.dark_3};
  border-radius: 2.3rem;
  height: 118rem;
  width: 82.6rem;

  @media (max-width: ${size.mobileS}) {
    height: 60rem;
    width: 44rem;
    border-radius: 1.2rem;
  }

  @media (max-width: 21.5rem) {
    height: 50rem;
    width: 35rem;
  }
`;

export const Image = styled.div<{ $active: boolean; $src: string }>`
  background: url(${({ $src }) => $src}) no-repeat center center;
  background-size: cover;
  grid-area: 1/1;
  opacity: 0;
  animation: ${({ $active }) => ($active ? start : end)} 0.5s
    ${({ $active }) => ($active ? 'forwards' : 'backwards')};
  background-size: cover;
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
  overflow: hidden;

  @media (max-width: ${size.mobileS}) {
    left: -1.5rem;
    border-radius: 2rem;
  }
`;

export const LoadingWidth = styled.span<{ $width: boolean }>`
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.dark_2};
  position: absolute;
  width: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  animation: ${({ $width }) => ($width ? '' : width)} 6s linear;
`;

export const Control = styled.div`
  ${flex};
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

export const TitleMap = styled.img`
  display: block;
  height: 12rem;
  margin: 10rem auto;
  padding-top: 5rem;
  border-top: 2px solid ${({ theme: { colors } }) => colors.dark_1};

  @media (max-width: ${size.mobileS}) {
    margin: 5rem auto;
    height: 14rem;
  }

  @media (max-width: 21.5rem) {
    padding-top: 0rem;
    height: 10rem;
  }
`;

export const TitleQuality = styled.img`
  display: block;
  margin: 15rem auto 4rem;
  height: 9rem;
  position: relative;
  z-index: 1;

  @media (max-width: ${size.mobileS}) {
    margin: 10rem auto 5rem;
    height: 6rem;
  }

  @media (max-width: 21.5rem) {
    height: 4.5rem;
    margin: 5rem auto;
  }
`;

export const QualityBox = styled.div<{ $quantity: boolean }>`
  ${flex};
  justify-content: ${({ $quantity }) => ($quantity ? 'start' : 'center')};

  gap: 3rem;
  width: 55%;
  margin: 10rem auto;
  padding-bottom: 5rem;
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.dark_1};
  overflow-x: scroll;
  width: 100%;

  &::-webkit-scrollbar {
    background-color: transparent;
    height: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(47, 46, 65, 0.3);
    border-radius: 6px;
  }
  @media (max-width: ${size.mobileS}) {
    margin: 5rem auto;
    gap: 1rem;
  }

  @media (max-width: 21.5rem) {
    padding-bottom: 3rem;
  }
`;

export const Quality = styled.p`
  ${flex}
  flex-shrink: 0;
  background: url('../../utils/coracao.svg') no-repeat center center;
  background-size: cover;
  height: 22rem;
  width: 22rem;
  background-color: ${({ theme: { colors } }) => colors.dark_3};
  border: 2px solid ${({ theme: { colors } }) => colors.dark_2};
  font-size: 2rem;
  padding: 4rem;
  justify-content: center;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;

  position: relative;
  aspect-ratio: 1;

  @media (max-width: ${size.mobileS}) {
    height: 18rem;
    width: 18rem;
  }

  @media (max-width: 21.5rem) {
    height: 14rem;
    font-size: 1.5rem;
    width: 14rem;
  }
`;

export const Message = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  padding: 0 6rem;
  text-align: center;
  background-color: ${({ theme: { colors } }) => colors.dark};
  position: relative;
  z-index: 1;

  @media (max-width: ${size.mobileS}) {
    padding: 0;
    font-size: 2rem;
    font-weight: initial;
  }

  @media (max-width: 21.5rem) {
    font-size: 1.8rem;
  }
`;
