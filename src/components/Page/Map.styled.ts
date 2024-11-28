import styled from 'styled-components';
import { size } from '../../styles/Global.styled';

export const Container = styled.section`
  height: 70rem;
  width: 80%;
  margin: 0 auto;
  border-radius: 2rem;
  overflow: hidden;
  border: 2px solid ${({ theme: { colors } }) => colors.dark_2};

  .leaflet-tooltip {
    background-color: ${({ theme: { colors } }) => colors.dark_1};
    font-size: 1.2rem;
    padding: 1rem 1.5rem;
    border-radius: 6rem;
    font-weight: bold;
    border: 3px solid ${({ theme: { colors } }) => colors.cor_1};
    color: ${({ theme: { colors } }) => colors.light};
  }

  @media (max-width: ${size.mobileS}) {
    width: 100%;
    height: 50rem;
    border-radius: 1.5rem;
  }
`;
