import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { container } from '../../styles/Container.styled';
import { size } from '../../styles/Global.styled';

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
  ${container}
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: initial;

  @media (max-width: ${size.mobileS}) {
    height: 100%;
    padding: 5rem 3rem;
  }
`;
export const Title = styled.img`
  height: 10rem;

  @media (max-width: ${size.largeS}) {
    height: 8rem;
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
  background-color: ${({ theme: { colors } }) => colors.dark_1};
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
    box-shadow: initial;

    img {
      height: 4rem;
    }
  }
`;
