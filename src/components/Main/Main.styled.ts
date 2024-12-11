import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { buttonStyle } from '../../styles/Button.styled';
import { size } from '../../styles/Global.styled';
import { title } from '../../styles/Title.styled';

const scaleButton = keyframes`

0%{
transform:initial
}

100%{
transform: scale(1.1)
}
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15rem 0;
  gap: 15rem;

  @media (max-width: ${size.mobileL}) {
    height: fit-content;
    padding: 20rem 0;
    gap: 10rem;
  }

  @media (max-width: ${size.mobileS}) {
    padding: 10rem 3rem;
    gap: 5rem;
  }
`;

export const HomeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 100%;

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

export const Phone = styled.img`
  position: relative;
  z-index: 1;

  @media (max-width: ${size.mobileL}) {
  }

  @media (max-width: ${size.mobileS}) {
  }
`;

export const Title = styled.h1`
  ${title}
  text-align: center;
  max-width: 10ch;

  @media (max-width: ${size.mobileL}) {
    font-size: 14rem;
  }

  @media (max-width: ${size.mobileS}) {
    font-size: 10rem;
  }
`;

export const Highlight = styled.span`
  background-image: ${({ theme }) => theme.colors.linearPrimary};
  background-clip: text;
  color: transparent;
`;

export const Description = styled.p`
  position: relative;
  font-family: 'Poppins', system-ui;

  z-index: 1;
  font-size: 2rem;
  text-align: center;
  max-width: 45ch;
  line-height: 1.3;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.light};

  @media (max-width: ${size.mobileS}) {
    font-size: 2rem;
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
  background-image: ${({ theme }) => theme.colors.dark_linear2};
  padding: 7rem 2rem 3rem;
  border-radius: 1.3rem;
  border: 2px solid ${({ theme }) => theme.colors.dark_3};
  width: 50rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  margin-bottom: 10rem;
  position: relative;
  z-index: 1;

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

export const ContainerInfo = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Subtitle = styled.span`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.light};
  font-style: italic;

  @media (max-width: ${size.mobileL}) {
    font-size: 1.8rem;
  }

  @media (max-width: ${size.mobileS}) {
    font-size: 1.8rem;
  }
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
  color: transparent;
`;

export const ButtonPlan = styled(Link)`
  ${buttonStyle}
  display: block;
  width: fit-content;
  margin: 4rem auto;
  text-align: center;

  animation: ${scaleButton} 1s infinite linear alternate-reverse;
`;
