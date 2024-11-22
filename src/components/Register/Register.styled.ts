import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { container } from '../../styles/Container.styled';

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8rem;
  gap: 2rem;
  justify-content: center;
  position: relative;
`;

export const Container = styled.section`
  ${container}
  height: auto;
`;
export const Title = styled.img`
  height: 10rem;
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
`;
