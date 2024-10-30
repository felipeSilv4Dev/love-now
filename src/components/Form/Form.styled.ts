import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 4rem;
  color: gray;
`;

export const Input = styled.input<{ $error: boolean }>`
  font-size: 1.5rem;
  font-family: inherit;
  padding: 1.5rem 2rem;
  color: inherit;
  border-radius: 2px;
  background-color: rgba(${({ theme }) => theme.colors.default}, 0.5);
  border: none;
  border-bottom: 0.3rem solid
    ${(props) => (props.$error ? 'red' : 'transparent')};
  width: 90%;
  display: block;
  transition: all 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    border-bottom: 0.3rem solid ${(props) => (props.$error ? 'red' : 'green')};
  }
  &::placeholder {
    color: gray;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export const InputBox = styled.div<{ $error: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  span {
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 2rem;
    margin-top: 0.7rem;
    display: Block;
    color: ${(props) => (props.$error ? 'red' : 'inherit')};
    transition: all 0.3s;
    opacity: ${(props) => (props.$error ? 1 : 0)};
    visibility: ${(props) => (props.$error ? 'visible' : 'hidden')};
    transform: translateY(${(props) => (props.$error ? 0 : '-6rem')});
  }

  input:focus + span {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
    color: red;
  }
`;
