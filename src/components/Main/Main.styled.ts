import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { buttonStyle } from '../../styles/Button.styled';

export const Container = styled.section`
  background: url('../../utils/texture.png') no-repeat center center;
  background-size: cover;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const TextBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

export const Description = styled.p`
  position: relative;
  font-family: 'Poppins', system-ui;

  z-index: 1;
  font-size: 2.2rem;
  text-align: center;
  max-width: 45ch;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.light};
`;

export const Button = styled(Link)`
  ${buttonStyle}
`;

const top = keyframes`
0%{
transform: translateY(100rem);
}

100%{
	transform: translateY(-100rem);
}
`;
const bottom = keyframes`
0%{
transform: translateY(-100rem);
}

100%{
	transform: translateY(100rem);
}
`;

const hearth = keyframes`
0%{
transform: rotateX(0)

}

100%{
	transform:  rotatex(360deg);
}`;

export const WapperHeath = styled.span<{
  $time?: number;
  $type?: string;
  $position?: number;
}>`
  perspective: 200%;
  transform-style: preserve-3d;
  animation: ${(props) => (props.$type === 'top' ? top : bottom)}
    ${(props) => (props.$time ? `${props.$time}s` : '8s')} infinite linear;
  position: absolute;
  left: ${(props) => (props.$position ? `${props.$position}rem` : '50%')};
`;

export const Hearth = styled.img<{ $height?: number; $opacity?: number }>`
  transform-origin: center center;
  transform: skew(200deg);
  animation: ${hearth} 2s infinite linear;
  height: ${(props) => (props.$height ? `${props.$height}px` : 'auto')};
  opacity: ${(props) => (props.$opacity ? props.$opacity : 1)};
`;
