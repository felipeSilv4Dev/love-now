import React from 'react';
import * as S from './Main.styled';
import HearthAnimation from './HearthAnimation';

const Main = () => {
  return (
    <S.Container>
      <S.TextBox>
        <S.Title src="../../utils/title.svg" alt="title" />

        <S.Description>
          "Surpreenda quem você ama com uma página personalizada: mensagens,
          fotos e memórias únicas para celebrar sua história juntos!"
        </S.Description>

        <S.Button to={'/register'}>Criar Minha página</S.Button>
        <HearthAnimation />
      </S.TextBox>
    </S.Container>
  );
};

export default Main;
