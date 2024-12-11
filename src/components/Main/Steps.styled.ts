import styled from 'styled-components';
import { size } from '../../styles/Global.styled';
import { title } from '../../styles/Title.styled';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  gap: 7rem;

  @media (max-width: ${size.desktopS}) {
    max-width: 85%;
  }

  @media (max-width: ${size.mobileL}) {
    flex-direction: column;
    max-width: initial;
    gap: 4rem;
  }
`;

export const Title = styled.h1`
  ${title}

  @media (max-width: ${size.mobileL}) {
    font-size: 14rem;
  }

  @media (max-width: ${size.mobileS}) {
    font-size: 10rem;
  }
`;

export const Steps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${size.mobileL}) {
    flex-direction: column;
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3rem 2rem;
  border: 2px solid ${({ theme }) => theme.colors.dark_3};
  border-radius: 1.5rem;
  overflow: hidden;
  background-image: ${({ theme }) => theme.colors.dark_linear2};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);

  &:first-child {
    transform: translateY(3rem) rotate(10.54deg);
  }

  &:last-child {
    transform: translateY(3rem) rotate(-10.54deg);
  }

  @media (max-width: ${size.mobileL}) {
    flex-direction: column;

    &:first-child {
      transform: translateY(0rem) rotate(10.54deg);
    }
    &:nth-child(2n) {
      transform: translateY(0rem) rotate(-10.54deg);
    }
    &:last-child {
      transform: translateY(0rem) rotate(0);
    }
  }
`;

export const TitleStep = styled.h3`
  ${title}
  font-size: 2.5rem;
  text-align: center;
  font-family: 'poppins', sans-serif;
  letter-spacing: initial;
  text-transform: lowercase;
  font-style: italic;

  span {
    display: block;
    font-size: 3rem;
    background: ${({ theme }) => theme.colors.linearPrimary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.dark_3};
    background-clip: text;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    color: transparent;
    font-weight: bold;
  }

  @media (max-width: ${size.mobileL}) {
    font-size: 2rem;

    span {
      font-size: 2.5rem;
    }
  }
`;

export const ImageStep = styled.img`
  height: 28rem;

  @media (max-width: ${size.mobileL}) {
    height: 30rem;
  }

  @media (max-width: ${size.mobileS}) {
    height: 24rem;
  }
`;
