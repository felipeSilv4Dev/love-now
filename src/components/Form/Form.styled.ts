import styled, { css } from 'styled-components';
import { buttonStyle } from '../../styles/Button.styled';
import { size } from '../../styles/Global.styled';

const flex = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Form = styled.form`
  position: relative;
  ${flex}
  gap: 2rem;
  width: 55%;
  margin: auto;
  padding: 8rem 0;
  z-index: 1;

  @media (max-width: ${size.largeS}) {
    width: 70%;
  }

  @media (max-width: ${size.mobileS}) {
    margin: 0;
    gap: 1rem;
    width: 100%;
    padding: 0;
    padding-bottom: 8rem;
  }
`;

const baseInput = css<{ $error: boolean }>`
  font-family: inherit;
  font-size: 1.5rem;
  padding: 1.5rem 2rem;
  background: ${({ theme: { colors } }) => colors.dark_1};
  color: ${({ theme: { colors } }) => colors.light};
  border: 3px solid ${({ theme }) => theme.colors.dark_2};
  border-radius: 7.1rem;
  transition: all 0.3s;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-bottom: 0.3rem solid
      ${({ $error, theme: { colors } }) =>
        $error ? colors.error : colors.correct};
  }

  &::placeholder {
    font-weight: bold;
    color: ${({ theme: { colors } }) => colors.dark_2};
  }

  &:focus::placeholder {
    color: transparent;
  }

  @media (max-width: ${size.largeS}) {
    font-size: 1.8rem;
  }

  @media (max-width: ${size.mobileS}) {
    font-size: 1.8rem;
    border-radius: 2.5rem;

    &::placeholder {
      font-size: 1.5rem;
    }
  }
`;

export const InputBox = styled.div`
  ${flex}

  input:focus + span ,textarea:focus + span {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  @media (max-width: ${size.mobileS}) {
    gap: 1.5rem;
  }
`;

export const Input = styled.input<{ $error: boolean }>`
  ${baseInput}

  &:-webkit-autofill {
    font-size: 1.5rem !important;
    -webkit-box-shadow: 0 0 0 100rem ${({ theme: { colors } }) => colors.dark_1}
      inset !important;
    -webkit-text-fill-color: ${({ theme: { colors } }) =>
      colors.light} !important;
  }
`;

export const TextError = styled.span<{ $error: boolean }>`
  font-size: 1.5rem;
  margin-left: 2rem;
  display: Block;
  color: ${({ $error, theme: { colors } }) =>
    $error ? colors.error : colors.light};

  opacity: ${({ $error }) => ($error ? 1 : 0)};
  visibility: ${({ $error }) => ($error ? 'visible' : 'hidden')};
  transition: all 0.3s;
  transform: translateY(${({ $error }) => ($error ? 0 : '-5rem')});

  @media (max-width: ${size.largeS}) {
    font-size: 1.8rem;
  }

  @media (max-width: ${size.mobileS}) {
    font-size: 1.5rem;
  }
`;

export const InputPhoto = styled.label<{ $fill: number; $error: boolean }>`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  align-self: center;
  background: conic-gradient(
    ${({ theme: { colors } }) => colors.fill}
      calc(${({ $fill }) => ($fill ? $fill : 0)} * 3.6deg),
    ${({ theme: { colors }, $error }) =>
        $error ? colors.error : colors.dark_2}
      0
  );
  cursor: ${({ $fill }) => ($fill === 100 ? 'initial' : 'pointer')};
  position: relative;
  overflow: hidden;
  transition: all 0.2s linear;

  &::before {
    content: '';
    display: block;
    height: 11.4rem;
    width: 11.4rem;
    position: absolute;
    background-color: ${({ theme: { colors } }) => colors.dark_1};
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: ${size.mobileS}) {
      height: 14.4rem;
      width: 14.4rem;
    }
  }

  input {
    display: none;
  }

  @media (max-width: ${size.mobileS}) {
    width: 15rem;
    height: 15rem;
  }
`;
export const TextContainerPhotos = styled.div`
  ${flex}
  flex-direction: row;
  gap: 0.1rem;
  align-items: center;

  p {
    padding: 1rem 1.5rem;
  }

  @media (max-width: ${size.mobileS}) {
    text-align: center;

    p {
      padding: 1.5rem 2rem;
      font-size: 1.5rem;
    }
  }
`;

export const TextErrorPhoto = styled.span<{ $error: boolean }>`
  font-size: 1.5rem;
  display: Block;
  color: ${({ $error, theme: { colors } }) =>
    $error ? colors.error : colors.light};
  transition: all 0.3s linear;
  align-self: center;

  @media (max-width: ${size.largeS}) {
    font-size: 1.8rem;
  }

  @media (max-width: ${size.mobileS}) {
    font-size: 1.8rem;
  }
`;

export const PhotoFill = styled.span<{ $fill: number }>`
  ${flex}

  align-items: center;
  justify-content: center;
  color: ${({ theme: { colors }, $fill }) =>
    $fill < 100 ? colors.light : colors.dark_2};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.2s linear;

  @media (max-width: ${size.largeS}) {
    font-size: 1.8rem;
  }
  @media (max-width: ${size.mobileS}) {
    font-size: 2rem;
  }

  img {
    opacity: ${({ $fill }) => ($fill < 100 ? 1 : 0.5)};
  }
`;

export const ImagePhoto = styled.img`
  height: 2.5rem;

  @media (max-width: ${size.mobileS}) {
    height: 3rem;
  }
`;

export const Message = styled.textarea<{ $error: boolean }>`
  ${baseInput};
  height: 25rem;
  border-radius: 3.4rem;

  resize: none;
`;

export const BoxQuality = styled.div`
  ${flex}
  flex-direction: row;
  position: relative;

  input {
    flex: 1;
  }
`;

export const ButtonQuality = styled.button`
  all: unset;
  ${buttonStyle}
  ${flex}
	width: 16rem;
  text-align: center;
  justify-content: center;
  cursor: pointer;

  font-size: 1.5rem;
  position: absolute;
  box-sizing: border-box;
  padding: 0;
  bottom: 0;
  top: 0;
  right: 0;
  border-top: 3px solid ${({ theme: { colors } }) => colors.dark_2};
  border-right: 3px solid ${({ theme: { colors } }) => colors.dark_2};
  border-bottom: 3px solid ${({ theme: { colors } }) => colors.dark_2};

  &:hover {
    transform: initial;

    &:active {
      transform: initial;
    }
  }

  &:disabled {
    opacity: 0.4;
    cursor: initial;

    &:hover {
      &::after {
        display: none;
      }
    }
  }

  @media (hover: none) {
    &:active {
      opacity: 0.7;
    }

    &:hover {
      &::after {
        display: none;
      }
    }
  }

  @media (max-width: ${size.mobileS}) {
    border-radius: 2.1rem;
  }
`;

export const TextContainerQualitys = styled.div`
  ${flex}
  flex-direction: row;
  gap: 0.1rem;
  align-items: center;
  width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(47, 46, 65, 0.3);
    border-radius: 6px;
  }

  p {
    padding: 1rem 1.5rem;
  }

  @media (max-width: ${size.mobileS}) {
    text-align: center;

    p {
      padding: 1.5rem 2rem;
      font-size: 1.5rem;
    }
  }
`;

export const TextContent = styled.p`
  ${flex};
  flex: 0 0 auto;
  flex-direction: row;
  align-items: end;
  gap: 1rem;
  background-color: ${({ theme: { colors } }) => colors.dark_1};
  border-radius: 8rem;
  padding: 1rem 1.5rem;
  color: ${({ theme: { colors } }) => colors.light};
  text-transform: lowercase;
  font-size: 1.5rem;
  margin-left: 2rem;
  width: max-content;

  @media (max-width: ${size.largeS}) {
    font-size: 1.8rem;
    margin-left: 1rem;
  }
`;

export const Close = styled.img`
  height: 2.1rem;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonSubmit = styled.button`
  all: unset;
  ${buttonStyle}
  ${flex}
	width: 16rem;
  text-align: center;
  justify-content: center;
  align-self: center;
  cursor: pointer;
  padding: 1.5rem 2rem;
  font-size: 1.5rem;

  &:disabled {
    opacity: 0.4;
    cursor: initial;

    &:hover {
      transform: initial;
      &::after {
        display: none;
      }
    }
  }

  @media (max-width: ${size.largeS}) {
    font-size: 1.8rem;
  }

  @media (max-width: ${size.mobileS}) {
    font-size: 2rem;
    margin-top: 3rem;
  }
`;
