import styled, { keyframes } from 'styled-components';
import { container } from '../../styles/Container.styled';

const rotate = keyframes`
from {
	transform: initial;
}

to{
	transform: rotate(360deg);
}
`;

export const Container = styled.section`
  ${container}
  height: 100vh;
`;

export const WrapperSpinner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const Spinner = styled.img`
  animation: ${rotate} 2s infinite linear;
`;
