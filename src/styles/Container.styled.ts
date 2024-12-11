import { css } from 'styled-components';

export const container = css`
  background-image: ${({ theme }) => theme.colors.dark_linear},
    url('../../utils/texture.jpg');
  background-size: cover;
  position: relative;
`;
