import styled from 'styled-components';
import { size } from '../../styles/Global.styled';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  gap: 7rem;

  @media (max-width: ${size.desktopS}) {
    max-width: 85%;
  }

  @media (max-width: ${size.mobileL}) {
    max-width: initial;
    flex-direction: column;
    gap: 4rem;
  }
`;

export const Title = styled.img`
  @media (max-width: ${size.mobileL}) {
    height: 14rem;
  }
`;

export const Steps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Step = styled.img`
  height: 30rem;
  flex: 0 0 30rem;
  border: 3px solid ${({ theme }) => theme.colors.dark_3};
  border-radius: 2.5rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);

  @media (max-width: ${size.mobileL}) {
    height: initial;
    flex: 0 0 initial;
  }

  @media (max-width: ${size.mobileS}) {
    height: 50%;
    flex: 0 0 50%;
  }
`;
