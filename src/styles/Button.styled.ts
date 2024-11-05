import { css } from 'styled-components';

export const buttonStyle = css`
  font-family: 'Poppins', system-ui;
  background: ${({ theme }) => theme.colors.linearPrimary};
  font-size: 2rem;
  padding: 1rem 4rem;
  text-transform: uppercase;
  border-radius: 10rem;
  position: relative;
  z-index: 1;
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);

  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.4s;
    z-index: -1;
    background: ${({ theme }) => theme.colors.linearPrimary};
  }

  &:hover {
    transform: translateY(-3px);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }

    &:active {
      transform: translateY(3px);
      box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
    }
  }
`;
