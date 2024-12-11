import { css } from 'styled-components';

export const title = css`
  font-family: 'BrushBesh', sans-serif;
  font-weight: normal;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-size: 11rem;
  position: relative;
  color: ${({ theme }) => theme.colors.light};
  z-index: 1;
`;
