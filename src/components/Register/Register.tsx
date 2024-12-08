import { ReactNode } from 'react';
import * as S from './Register.styled';

const Register = ({ children }: { children: ReactNode }) => {
  return (
    <S.Container>
      <S.Header>
        <S.Home to="/">
          <S.Title src="../../utils/home.svg" alt="title regiter" />
        </S.Home>
        <S.Title src="../../utils/register.svg" alt="title regiter" />
      </S.Header>

      {children}
    </S.Container>
  );
};

export default Register;
