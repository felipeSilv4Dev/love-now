import React from 'react';
import * as S from './Main.styled';
import HearthAnimation from './HearthAnimation';
import Steps from './Steps';

const Main = () => {
  return (
    <S.Container>
      <S.CoupleBox>
        <S.TextBox>
          <S.Title src="../../utils/title.svg" alt="title" />

          <S.Description>
            "Surpreenda quem você ama com uma página personalizada: mensagens,
            fotos e memórias únicas para celebrar sua história juntos!"
          </S.Description>

          <S.Button to={'/register'}>Criar Minha página</S.Button>
          <HearthAnimation />
        </S.TextBox>

        <S.Couple />
      </S.CoupleBox>
      <Steps />
      <S.ContainerPlan>
        <S.Title src="../../utils/plan-title.svg" alt="plant title" />
        <S.Plan>
          <S.Header>
            <S.NamePlan>Plano Fixo</S.NamePlan>
            <S.ContainerPrice>
              R$ <S.Price> 19,99</S.Price>
            </S.ContainerPrice>
          </S.Header>

          <S.ContainerInfo>
            <S.Info>
              <S.IconInfo className="fa-solid fa-check" /> 3 fotos
            </S.Info>
            <S.Info>
              <S.IconInfo className="fa-solid fa-check" /> 6 apelidos
            </S.Info>
            <S.Info>
              <S.IconInfo className="fa-solid fa-check" /> 1 ano de acesso
            </S.Info>
          </S.ContainerInfo>

          <S.ButtonPlan to="/register">Comprar</S.ButtonPlan>
        </S.Plan>
      </S.ContainerPlan>
    </S.Container>
  );
};

export default Main;
