import * as S from './Main.styled';
import * as U from '../styles/utils/utils.styled';

const Main = () => {
  return (
    <S.Container>
      <S.TextBox>
        <S.Title>Love Now</S.Title>
        <S.Paragraph>
          crie sua página personalizada para a pessoa que você ama.
        </S.Paragraph>

        <U.Button>Comprar</U.Button>
      </S.TextBox>
    </S.Container>
  );
};

export default Main;
