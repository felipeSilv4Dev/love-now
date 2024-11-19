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
  height: 8rem;
`;
export const Home = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  position: fixed;
  z-index: 10;
  left: 10rem;

  &:hover {
    transform: scale(1.1);
  }
`;
