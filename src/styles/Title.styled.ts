import styled from 'styled-components';

export const Title = styled.h1<{ $size?: string }>`
  font-family: 'Knewave', system-ui;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-size: ${({ $size }) => ($size ? $size : '15rem')};
  position: relative;
  background-image: ${({ theme }) => theme.colors.linearPrimary};
  background-clip: text;
  color: transparent;
  z-index: 1;
`;
