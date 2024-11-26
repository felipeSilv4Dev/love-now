import styled from 'styled-components';
import { container } from '../../styles/Container.styled';
import { buttonStyle } from '../../styles/Button.styled';
import { Link } from 'react-router-dom';
import { title } from '../../styles/Title.styled';

export const Container = styled.section`
  ${container}
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
  text-transform: lowercase;
  font-weight: bold;
  font-size: 4rem;
  display: block;
`;

export const Title = styled.img`
  z-index: 1;
  height: 16rem;
`;

export const Image = styled.img`
  position: absolute;
  top: 55%;
  left: 60%;
  transform: translate(-55%, -60%);
  height: 75.5vh;
`;

export const Home = styled(Link)`
  ${buttonStyle}
`;
