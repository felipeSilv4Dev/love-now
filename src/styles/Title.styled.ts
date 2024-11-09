import { css } from 'styled-components';

export const title = css`
  font-family: 'Knewave', system-ui;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-size: 15rem;
  position: relative;
  background-image: ${({ theme }) => theme.colors.linearPrimary};
  background-clip: text;
  color: transparent;
  z-index: 1;
`;
