import styled from 'styled-components';
import { container } from '../../styles/Container.styled';
import { buttonStyle } from '../../styles/Button.styled';
import { Link } from 'react-router-dom';
import { title } from '../../styles/Title.styled';
import { size } from '../../styles/Global.styled';

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

  @media (max-width: ${size.mobileS}) {
    padding: 3rem;
  }
`;

export const Message = styled.h2`
  ${title}
  color:${({ theme: { colors } }) => colors.light};
  font-family: 'Poppins', sans-serif;
  text-transform: lowercase;
  font-weight: bold;
  font-size: 4rem;
  display: block;

  @media (max-width: ${size.mobileS}) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const Title = styled.img`
  z-index: 1;
  height: 16rem;

  @media (max-width: ${size.mobileS}) {
    height: 12rem;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 55%;
  left: 60%;
  transform: translate(-55%, -60%);
  height: 75.5vh;

  @media (max-width: ${size.mobileS}) {
    height: 30vh;
  }
`;

export const Home = styled(Link)`
  ${buttonStyle}
`;