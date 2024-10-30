import * as S from './Main.styled';
import * as U from '../../styles/utils/utils.styled';

const Main = () => {
  return (
    <U.Container $bg={'../../utils/casal.jpg'}>
      <U.TextBox>
        <U.Title $animation>Love Now</U.Title>
        <S.Paragraph>
          Surpreenda quem você ama com uma página feita especialmente para eles!
          ❤️✨
        </S.Paragraph>

        <U.Button to="/cadastro">Entrar</U.Button>
      </U.TextBox>
    </U.Container>
  );
};

export default Main;
