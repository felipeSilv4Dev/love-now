import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { size } from '../../styles/Global.styled';
import { title } from '../../styles/Title.styled';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6rem;
  gap: 2rem;
  position: relative;

  @media (max-width: ${size.mobileS}) {
    padding: 0 0 3rem;
    flex-direction: column;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: initial;

  @media (max-width: ${size.mobileS}) {
    height: 100%;
    padding: 5rem 3rem;
  }
`;
export const Title = styled.h1`
  ${title}
  text-align: center;
  @media (max-width: ${size.mobileL}) {
    font-size: 14rem;
  }

  @media (max-width: ${size.mobileS}) {
    font-size: 10rem;
  }
`;

export const Home = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  position: fixed;
  z-index: 10;
  left: 10rem;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: ${({ theme: { colors } }) => colors.dark_5};
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.5);

  img {
    height: 3rem;
  }

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);

    &:active {
      transform: initial;
    }
  }
  @media (max-width: ${size.largeS}) {
    width: 8rem;
    height: 8rem;
    top: initial;
    left: initial;
    position: initial;

    img {
      height: 4rem;
    }

    @media (max-width: ${size.mobileS}) {
      width: 5rem;
      height: 5rem;
      align-self: start;

      img {
        height: 2.5rem;
      }
    }
  }
`;

export const IconHome = styled.i`
  font-size: 2rem;
  color: transparent;
`;
