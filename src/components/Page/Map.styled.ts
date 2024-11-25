import styled from 'styled-components';

export const Container = styled.section`
  height: 70rem;
  width: 100%;

  .leaflet-tooltip {
    background-color: ${({ theme: { colors } }) => colors.dark_1};
    font-size: 1.2rem;
    padding: 1rem 1.5rem;
    border-radius: 6rem;
    border: 2px solid ${({ theme: { colors } }) => colors.cor_1};
    color: ${({ theme: { colors } }) => colors.light};
  }
`;
