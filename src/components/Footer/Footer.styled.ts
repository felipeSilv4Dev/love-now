import styled from 'styled-components';
import { size } from '../../styles/Global.styled';

export const Container = styled.footer`
  padding: 2.7rem 7.2rem;
  background-color: ${({ theme: { colors } }) => colors.dark_4};
  border-top: 2px solid ${({ theme: { colors } }) => colors.dark_3};
  position: relative;

  @media (max-width: ${size.mobileS}) {
    padding: 2.7rem 3rem;
  }
`;
export const Contacts = styled.div`
  display: flex;
  align-items: center;
`;

export const Contact = styled.i`
  padding: 1rem;
  font-size: 2.5rem;
  color: ${({ theme: { colors } }) => colors.light};
  opacity: 0.5;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    color: ${({ theme: { colors } }) => colors.cor_1};
    transform: translateY(-3px);
    opacity: 1;
  }
`;

export const Copyrigth = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${size.mobileS}) {
    flex-direction: column;
    gap: 2rem;
    align-items: start;
  }
`;

export const Creator = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const Photo = styled.div`
  background: url('../../utils/man.jpg') no-repeat center center;
  background-size: cover;
  height: 5rem;
  width: 5rem;

  border-radius: 50%;
  border: 3px solid ${({ theme: { colors } }) => colors.dark_3};
`;

export const Name = styled.h3`
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  text-transform: capitalize;

  @media (max-width: ${size.mobileS}) {
    font-size: 1.8rem;
  }
`;

export const Copy = styled.p`
  font-size: 1.4rem;

  @media (max-width: ${size.mobileS}) {
    font-size: 1.8rem;
  }
`;
