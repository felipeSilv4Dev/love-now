import { Link } from 'react-router-dom';
import { size } from '../../styles/Global.styled';
import { title } from '../../styles/Title.styled';
import { styled, css } from 'styled-components';
import { buttonStyle } from '../../styles/Button.styled';

const button = css`
  border-radius: 1.3rem;
  align-self: center;
  cursor: pointer;
  padding: 1rem 4rem;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.light};
  border: 2px solid ${({ theme }) => theme.colors.fill};
  color: ${({ theme }) => theme.colors.fill};
  font-weight: bold;
  letter-spacing: 0.1rem;
  transition: all 0.2s;

  &:active {
    transform: initial;
    background-color: ${({ theme }) => theme.colors.light_1};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.light_1};
  }

  @media (max-width: ${size.mobileS}) {
    font-size: 1.8rem;
  }
`;
export const Container = styled.section`
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  margin: 0 auto;

  @media (max-width: ${size.mobileS}) {
    width: initial;
    padding: 10rem 3rem;
  }
`;

export const Title = styled.h1`
  ${title}
  text-align: center;

  @media (max-width: ${size.mobileL}) {
    font-size: 14rem;
  }

  @media (max-width: ${size.mobileS}) {
    font-size: 10rem;
  }

  @media (max-width: 21.5em) {
    font-size: 6rem;
  }
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.dark_linear2};
  padding: 4rem;
  margin-top: 5rem;
  border: 2px solid ${({ theme }) => theme.colors.dark_3};
  width: 100%;
  border-radius: 1.3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  margin-bottom: 5rem;

  @media (max-width: ${size.mobileL}) {
    justify-content: center;
    gap: 5rem;
  }

  @media (max-width: ${size.mobileS}) {
    padding: 2rem 0 0;
    flex-direction: column;
  }
`;

export const ContainerQRCode = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Download = styled.span`
  width: fit-content;
  ${button}
`;

export const ContainerUrl = styled.div`
  background-color: ${({ theme }) => theme.colors.dark_4};
  padding: 2rem 4rem;
  border-radius: 0.5rem;
  gap: 1rem;
  align-self: start;
  border: 2px solid ${({ theme }) => theme.colors.dark_3};
  display: flex;
  flex-direction: column;
  height: 25rem;
  justify-content: space-between;
  flex: 1;

  @media (max-width: ${size.mobileS}) {
    border-radius: none;
    border: none;
    padding: 2rem;
    width: 100%;
  }
`;
export const InfoUrlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${size.mobileS}) {
    gap: 2rem;
  }
`;

export const InfoUrl = styled.p`
  font-size: 1.6rem;
  text-align: start;

  @media (max-width: ${size.mobileS}) {
    font-size: 1.8rem;
  }
`;

export const URLCopy = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${size.mobileS}) {
    flex-direction: column;
    margin-top: 2rem;
    gap: 2rem;
  }
`;

export const Url = styled.h2`
  color: ${({ theme }) => theme.colors.cor_1};
  background-color: ${({ theme }) => theme.colors.dark_3};
  border-radius: 1.3rem;
  padding: 1rem;
  align-self: center;
  flex: 1;
  text-align: center;
  flex-wrap: wrap;

  @media (max-width: ${size.mobileS}) {
    font-size: 1.8rem;
    width: 100%;
  }
`;

export const Copy = styled.span`
  ${button}
  width: fit-content;
  align-self: center;

  &:hover {
    transform: initial;

    &:active {
      transform: initial;
    }
  }
`;
export const NexButton = styled(Link)`
  align-self: flex-end;

  @media (max-width: ${size.mobileS}) {
    align-self: center;
  }
`;

export const Next = styled.button`
  border: none;
  ${buttonStyle}
  font-size: 1.8rem;

  &:hover {
    transform: initial;

    &:active {
      transform: initial;
    }
  }
  @media (max-width: ${size.mobileS}) {
    font-size: 2rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;

  @media (max-width: ${size.mobileS}) {
    justify-content: center;
  }
`;
