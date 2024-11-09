import { ReactNode } from 'react';

import * as S from './Register.styled';

const Register = ({ children }: { children: ReactNode }) => {
  return (
    <S.Container>
      <S.Header>
        <S.Home to="/">Home</S.Home>
        <S.Title>Preencha o cadastro</S.Title>
      </S.Header>

      {children}
    </S.Container>
  );
};

export default Register;
