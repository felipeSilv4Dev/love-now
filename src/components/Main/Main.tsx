import * as S from './Main.styled';
import HearthAnimation from './HearthAnimation';

const Main = () => {
  return (
    <S.Container>
      <S.TextBox>
        <S.Image src="../../utils/couple.svg" alt="image undrawn couple" />
        <S.Title>LOVE NOW</S.Title>
        <S.Description>
          "Surpreenda quem você ama com uma página personalizada: mensagens,
          fotos e memórias únicas para celebrar sua história juntos!"
        </S.Description>

        <S.Button to={'/register'}>Criar</S.Button>
        <HearthAnimation />
      </S.TextBox>
    </S.Container>
  );
};

export default Main;
