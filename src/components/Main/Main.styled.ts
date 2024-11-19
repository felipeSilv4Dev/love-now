import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { buttonStyle } from '../../styles/Button.styled';
import { container } from '../../styles/Container.styled';

export const Container = styled.section`
  ${container}
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
