import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

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

export const Image = styled.img`
  height: 99.5vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
  font-family: 'Knewave', system-ui;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-size: 15rem;
  position: relative;
  z-index: 1;
`;

export const Description = styled.p`
  position: relative;
  font-family: 'Poppins', system-ui;

  z-index: 1;
  font-size: 2.2rem;
  text-align: center;
  max-width: 45ch;
  line-height: 1.3;
  color: #efefff;
`;

export const Button = styled(Link)`
  font-family: 'Poppins', system-ui;
  background: linear-gradient(#ffa7ff, #f600dd);
  font-size: 2.2rem;
  padding: 1rem 6rem;
  text-transform: uppercase;
  border-radius: 10rem;
  position: relative;
  z-index: 1;
  color: #efefff;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);

  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.4s;
    z-index: -1;
    background: linear-gradient(#ffa7ff, #f600dd);
  }

  &:hover {
    transform: translateY(-3px);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }

    &:active {
      transform: translateY(3px);
      box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
    }
  }
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
  animation: ${hearth} 2s infinite alternate ease;
  height: ${(props) => (props.$height ? `${props.$height}px` : 'auto')};
  opacity: ${(props) => (props.$opacity ? props.$opacity : 1)};
`;
