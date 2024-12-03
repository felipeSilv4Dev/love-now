import styled, { keyframes } from 'styled-components';
import { size } from '../../styles/Global.styled';

const top = keyframes`
0%{
transform: translateY(100rem);

}

100%{
	transform: translateY(-116rem)

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
  left: ${(props) => (props.$position ? `${props.$position}%` : '50%')};
`;

export const Hearth = styled.img<{ $height?: number; $opacity?: number }>`
  transform-origin: center center;
  transform: skew(200deg);
  animation: ${hearth} 2s infinite linear;
  height: ${(props) => (props.$height ? `${props.$height}px` : 'auto')};
  opacity: ${(props) => (props.$opacity ? props.$opacity : 1)};
  box-sizing: border-box;

  @media (max-width: ${size.mobileS}) {
    height: 2rem;
  }
`;
