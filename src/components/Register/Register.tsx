import { ReactNode } from 'react';
import * as S from './Register.styled';
import { Highlight } from '../Main/Main.styled';

const Register = ({ children }: { children: ReactNode }) => {
  return (
    <S.Container>
      <S.Header>
        <S.Home to="/">
          <Highlight>
            <S.IconHome className="fa-solid fa-house"></S.IconHome>
          </Highlight>
        </S.Home>
        <S.Title>crie sua página</S.Title>
      </S.Header>

      {children}
    </S.Container>
  );
};

export default Register;
