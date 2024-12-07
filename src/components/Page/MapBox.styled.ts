import styled, { keyframes } from 'styled-components';
import { size } from '../../styles/Global.styled';

const balon = keyframes`
0%{
	transform: translateY(.4rem);
}

100% {
	transform:initial;
}
`;

export const MapContainer = styled.section`
  overflow: hidden;
  margin: 0 auto;
  border-radius: 1rem;
  position: relative;
  width: 90vw;
  height: 70rem;
  border: 3px solid ${({ theme: { colors } }) => colors.dark_3};

  @media (max-width: ${size.mobileS}) {
    width: 100%;
    height: 50rem;
    border-radius: 1.5rem;
  }
`;

export const Map = styled.div``;

export const ContainerMaker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Marker = styled.div`
  background: url('../../utils/pointer-map.png') no-repeat center center;
  background-size: cover;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  animation: ${balon} 1s infinite alternate-reverse;
`;

export const Name = styled.p`
  background-color: ${({ theme: { colors } }) => colors.dark_1};
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-weight: bold;
  border: 2px solid ${({ theme: { colors } }) => colors.cor_1};
  color: ${({ theme: { colors } }) => colors.light};
  animation: ${balon} 1s infinite alternate-reverse;
`;
