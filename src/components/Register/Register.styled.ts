import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8rem;
  gap: 2rem;
  justify-content: center;
  position: relative;
`;

export const Container = styled.section`
  background: url('../../utils/texture.png') no-repeat center center;
  background-size: cover;
  /* height: 100vh; */

  position: relative;
  overflow: hidden;
`;

export const Home = styled(Link)`
  padding: 2rem;
  height: 5rem;
  width: 5rem;
  color: ${({ theme }) => theme.colors.light};
  font-weight: bold;
  text-decoration: none;
  background-image: ${({ theme: { colors } }) => colors.linearPrimary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  box-shadow: 0 0 2rem black;
  position: fixed;
  z-index: 10;
  left: 10rem;

  &:hover {
    transform: scale(1.1);
  }
`;
