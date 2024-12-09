import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { buttonStyle } from '../../styles/Button.styled';
import { container } from '../../styles/Container.styled';
import { size } from '../../styles/Global.styled';

export const Container = styled.section`
  ${container}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15rem 0;
  gap: 20rem;

  @media (max-width: ${size.mobileL}) {
    height: fit-content;
    padding: 5rem 0;
    gap: 10rem;
  }

  @media (max-width: ${size.mobileS}) {
    padding: 3rem;
  }
`;

export const CoupleBox = styled.div`
  display: flex;
  gap: 2rem;
  height: 100%;
  align-items: center;

  @media (max-width: ${size.mobileL}) {
    flex-direction: column;
  }
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 2rem;

  @media (max-width: ${size.mobileL}) {
    height: fit-content;
  }
`;

export const Couple = styled.div`
  background: url('../../utils/couple.svg') no-repeat center center;
  background-size: cover;

  height: 50rem;
  width: 52rem;

  position: relative;
  z-index: 1;

  @media (max-width: ${size.mobileL}) {
    height: 40rem;
    width: 42rem;
    order: -1;
    flex: 0 0 40rem;
  }

  @media (max-width: ${size.mobileS}) {
    height: 30rem;
    width: 30rem;
    flex: 0 0 30rem;
  }
`;

export const Title = styled.img`
  z-index: 1;
  height: 16rem;

  @media (max-width: ${size.mobileL}) {
    height: 14rem;
  }
`;

export const Description = styled.p`
  position: relative;
  font-family: 'Poppins', system-ui;

  z-index: 1;
  font-size: 2rem;
  text-align: center;
  max-width: 45ch;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.light};

  @media (max-width: ${size.mobileS}) {
    font-size: 1.8rem;
  }
`;

export const Button = styled(Link)`
  ${buttonStyle}
`;

export const ContainerPlan = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5rem;

  @media (max-width: ${size.mobileL}) {
    width: 100%;
  }
`;

export const Plan = styled.div`
  background-image: ${({ theme }) => theme.colors.dark_linear};
  padding: 7rem 2rem 3rem;
  border-radius: 1.3rem;
  border: 2px solid ${({ theme }) => theme.colors.dark_3};
  width: 50rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  margin-bottom: 10rem;

  @media (max-width: ${size.mobileS}) {
    width: 100%;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4rem;
`;

export const NamePlan = styled.h2`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 5rem;

  @media (max-width: ${size.mobileS}) {
    font-size: 4.5rem;
  }
`;

export const ContainerPrice = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 3rem;
`;

export const Price = styled.span`
  background-image: ${({ theme }) => theme.colors.linearPrimary};
  background-clip: text;
  color: transparent;
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Info = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem 3rem;
  font-size: 2rem;
  width: 100%;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.dark_4};
`;

export const IconInfo = styled.i`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.cor_1};
`;

export const ButtonPlan = styled(Link)`
  ${buttonStyle}
  display: block;
  width: fit-content;
  margin: 4rem auto;
  text-align: center;
`;
