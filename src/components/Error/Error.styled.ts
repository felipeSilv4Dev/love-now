import styled from 'styled-components';
import { container } from '../../styles/Container.styled';
import { title } from '../../styles/Title.styled';
import { Link } from 'react-router-dom';
import { buttonStyle } from '../../styles/Button.styled';
import { size } from '../../styles/Global.styled';

export const Container = styled.section`
  ${container}
  height: 100vh;

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

export const Title = styled.h2`
  ${title}
  background: ${({ theme: { colors } }) => colors.linearPrimary};
  background-clip: text;
  color: transparent;
  width: 100%;
  text-align: center;
  @media (max-width: ${size.mobileS}) {
    font-size: 10rem;
  }
`;

export const Status = styled.span`
  ${title}
  color:${({ theme: { colors } }) => colors.error};
  font-family: 'Poppins', sans-serif;
  display: inline;
  font-size: 4rem;
  text-align: center;
  @media (max-width: ${size.mobileS}) {
    font-size: 2rem;
  }
`;

export const Home = styled(Link)`
  ${buttonStyle}
`;
