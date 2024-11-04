import * as S from './Main.styled';
import HearthAnimation from './HearthAnimation';
import { Title } from '../../styles/Title.styled';
import { Button } from '../../styles/Button.styled';
import { Image } from '../../styles/Image.styled';

const Main = () => {
  return (
    <S.Container>
      <S.TextBox>
        <Image src="../../utils/couple.svg" alt="image undrawn couple" />
        <Title>LOVE NOW</Title>
        <S.Description>
          "Surpreenda quem você ama com uma página personalizada: mensagens,
          fotos e memórias únicas para celebrar sua história juntos!"
        </S.Description>

        <Button to={'/register'}>Criar</Button>
        <HearthAnimation />
      </S.TextBox>
    </S.Container>
  );
};

export default Main;
