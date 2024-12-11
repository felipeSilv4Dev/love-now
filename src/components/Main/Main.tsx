import * as S from './Main.styled';
import HearthAnimation from './HearthAnimation';
import Steps from './Steps';

const Main = () => {
  return (
    <S.Container>
      <S.HomeBox>
        <S.TextBox>
          <S.Title>Love Now</S.Title>

          <S.Description>
            "Surpreenda quem você ama com uma página personalizada: mensagens,
            fotos e memórias únicas para celebrar sua história juntos!"
          </S.Description>

          <S.Button to={'/register'}>Criar Minha página</S.Button>
          <HearthAnimation />
        </S.TextBox>

        <S.Phone src="../../utils/phone-exemplo.svg" alt="photo iphone" />
      </S.HomeBox>
      <Steps />
      <S.ContainerPlan>
        <S.Title>Ofertas Disponíveis</S.Title>
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
