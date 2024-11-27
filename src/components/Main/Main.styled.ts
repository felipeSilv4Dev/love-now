import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { buttonStyle } from '../../styles/Button.styled';
import { container } from '../../styles/Container.styled';
import { size } from '../../styles/Global.styled';

export const Container = styled.section`
  ${container}
  background: url("../../utils/man.jpg") no-repeat center center;
  background-size: cover;
  background-position-y: -5rem;

  @media (max-width: ${size.mobileL}) {
    background-position-y: 0;
  }
  @media (max-width: ${size.mobileS}) {
    padding: 3rem;
  }
`;

export const TextBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;
export const Title = styled.img`
  z-index: 1;
  height: 20rem;
  @media (max-width: ${size.mobileS}) {
    height: 17rem;
  }
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

  @media (max-width: ${size.mobileS}) {
    font-size: 2rem;
  }
`;

export const Button = styled(Link)`
  ${buttonStyle}
`;
