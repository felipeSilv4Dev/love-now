import styled from 'styled-components';
import { container } from '../../styles/Container.styled';
import { title } from '../../styles/Title.styled';
import { Link } from 'react-router-dom';
import { buttonStyle } from '../../styles/Button.styled';

export const Container = styled.section`
  ${container}

  img {
    opacity: 0.3;
  }
`;

export const Message = styled.h2`
  ${title}
  color:${({ theme: { colors } }) => colors.light};

  font-size: 6rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Status = styled.h2`
  ${title}
  color:${({ theme: { colors } }) => colors.error};
  display: inline;
  font-size: 6rem;
  text-align: center;
`;

export const Image = styled.img``;

export const Home = styled(Link)`
  ${buttonStyle}
  display: flex;
  margin: 5rem 25%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
