import styled, { css } from 'styled-components';
import { buttonStyle } from '../../styles/Button.styled';

const flex = `
  display: flex;
  flex-direction: column;
  gap: 1rem;`;

export const Form = styled.form`
  position: relative;
  ${flex}
  gap: 2rem;
  width: 55%;
  margin: 8rem auto;

  z-index: 1;
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
`;

export const Input = styled.input<{ $error: boolean }>`
  ${baseInput}
`;

export const InputBox = styled.div`
  ${flex}

  input:focus + span ,textarea:focus + span {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
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
`;

export const InputPhoto = styled.label<{ $fill: number; $error: boolean }>`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  align-self: center;
  background: ${({ theme: { colors } }) => colors.dark_1};
  border: 3px solid ${({ theme }) => theme.colors.dark_2};
  border-bottom: 0.3rem solid
    ${({ $error, theme: { colors } }) =>
      $error ? colors.error : colors.dark_2};

  cursor: ${({ $fill }) => ($fill === 100 ? 'initial' : 'pointer')};
  position: relative;
  overflow: hidden;
  input {
    display: none;
  }
`;

export const TextErrorPhoto = styled.span<{ $error: boolean }>`
  font-size: 1.5rem;
  display: Block;
  color: ${({ $error, theme: { colors } }) =>
    $error ? colors.error : colors.light};
  transition: all 0.3s;
  align-self: center;
`;

export const PhotoFill = styled.span<{ $fill?: number }>`
  width: ${({ $fill }) => ($fill ? `${$fill}%` : 0)};
  height: ${({ $fill }) => ($fill ? `${$fill}%` : 0)};
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-image: ${({ theme: { colors } }) => colors.linearPrimary};
  color: ${({ theme: { colors }, $fill }) =>
    $fill ? colors.light : colors.dark_2};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.2s linear;

  opacity: ${({ $fill }) => ($fill === 100 ? 0.5 : 1)};
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

  input {
    flex: 0 0 calc(100% - 16rem);
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
  padding: 1.5rem 2rem;
  font-size: 1.5rem;

  &:hover {
    transform: initial;
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
`;

export const TextQuality = styled.p`
  font-size: 1.5rem;
  margin-left: 2rem;
  display: flex;
  color: ${({ theme: { colors } }) => colors.light};
  text-transform: lowercase;
`;

export const TextContainerQuality = styled.div`
  ${flex}
  flex-direction: row;
  gap: 0.1rem;
`;

export const Close = styled.span`
  cursor: pointer;
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
`;
