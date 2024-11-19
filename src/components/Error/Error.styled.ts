import styled from 'styled-components';
import { container } from '../../styles/Container.styled';
import { title } from '../../styles/Title.styled';
import { Link } from 'react-router-dom';
import { buttonStyle } from '../../styles/Button.styled';

export const Container = styled.section`
  ${container}
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    opacity: 0.3;
  }
`;

export const Message = styled.h2`
  ${title}
  color:${({ theme: { colors } }) => colors.light};
  font-family: 'Poppins', sans-serif;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 5rem;
  position: absolute;
`;

export const Status = styled.h2`
  ${title}
  color:${({ theme: { colors } }) => colors.error};
  font-family: 'Poppins', sans-serif;
  display: inline;
  font-size: 6rem;
  text-align: center;
`;

export const Image = styled.img``;

export const Home = styled(Link)`
  ${buttonStyle}
  display: flex;
  margin: 4rem 32%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
