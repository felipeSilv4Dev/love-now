import styled, { keyframes } from 'styled-components';
import { container } from '../../styles/Container.styled';
import { size } from '../../styles/Global.styled';

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
export const Spinner = styled.span`
  background: url('../../utils/spinner.png') no-repeat center center;
  background-size: cover;
  height: 5rem;
  width: 5rem;
  animation: ${rotate} 2s infinite linear;

  @media (max-width: ${size.mobileS}) {
    height: 3rem;
    width: 3rem;
  }
`;
