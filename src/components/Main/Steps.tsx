import * as S from './Steps.styled';

const steps = [
  {
    step: 1,
    title: 'Preencha o formulário',
  },
  {
    step: 2,
    title: 'faça o pagamento',
  },
  {
    step: 3,
    title: 'Receba sua página',
  },
];

const Steps = () => {
  return (
    <S.Container>
      <S.Title>Como fazer</S.Title>

      <S.Steps>
        {steps.map((step) => (
          <S.Step key={step.step}>
            <S.TitleStep>
              <span>{step.step}°</span>

              {step.title}
            </S.TitleStep>

            <S.ImageStep
              src={`../../utils/step-${step.step}.png`}
              alt="image step"
            />
          </S.Step>
        ))}
      </S.Steps>
    </S.Container>
  );
};

export default Steps;
