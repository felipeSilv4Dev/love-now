import styled from 'styled-components';
import { container } from '../../styles/Container.styled';
import { title } from '../../styles/Title.styled';
import { Link } from 'react-router-dom';
import { buttonStyle } from '../../styles/Button.styled';

export const Container = styled.section`
  ${container}

  img {
    top: 40%;
  }
`;

export const ContentBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const Message = styled.h2`
  ${title}
  color:${({ theme: { colors } }) => colors.light};
  font-family: 'Poppins', sans-serif;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 4rem;
  display: block;
`;

export const Title = styled.img`
  z-index: 1;
  height: 16rem;
`;

export const Status = styled.h2`
  ${title}
  color:${({ theme: { colors } }) => colors.error};
  font-family: 'Poppins', sans-serif;
  display: inline;
  font-size: 4rem;
  text-align: center;
`;

export const Image = styled.img``;

export const Home = styled(Link)`
  ${buttonStyle}/* display: flex;
  margin: 4rem 32%;
  justify-content: center;
  align-items: center;
  text-align: center; */
`;
