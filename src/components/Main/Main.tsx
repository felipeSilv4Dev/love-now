import * as S from './Main.styled';
import Steps from './Steps';

const plans = ['3 fotos', '6 apelidos', 'um ano de acesso'];
const Main = () => {
  return (
    <S.Container>
      <S.HomeBox>
        <S.TextBox>
          <S.Title>
            Crie <S.Highlight>agora</S.Highlight>, ame para{' '}
            <S.Highlight>sempre </S.Highlight>!
          </S.Title>

          <S.Description>
            "Surpreenda quem você ama com uma página personalizada: mensagens,
            fotos e memórias únicas para celebrar sua história juntos!"
          </S.Description>

          <S.Button to={'/register'}>Criar Minha página</S.Button>
        </S.TextBox>

        <S.Phone src="../../utils/phone-exemplo.svg" alt="photo iphone" />
      </S.HomeBox>
      <Steps />
      <S.ContainerPlan>
        <S.Title>Ofertas</S.Title>
        <S.Plan>
          <S.Header>
            <S.NamePlan>Básico</S.NamePlan>
            <S.Subtitle>Pagamento Único</S.Subtitle>
            <S.ContainerPrice>
              R$ <S.Highlight>19,99</S.Highlight>
            </S.ContainerPrice>
          </S.Header>

          <S.ContainerInfo>
            {plans.map((plan, i) => (
              <S.Info key={i}>
                <S.Highlight>
                  <S.IconInfo className="fa-solid fa-check" />
                </S.Highlight>
                {plan}
              </S.Info>
            ))}
          </S.ContainerInfo>

          <S.ButtonPlan to="/register">Comprar</S.ButtonPlan>
        </S.Plan>
      </S.ContainerPlan>
    </S.Container>
  );
};

export default Main;
