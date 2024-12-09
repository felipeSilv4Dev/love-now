import * as S from './Steps.styled';

const Steps = () => {
  const imgs = Array.from({ length: 3 });
  return (
    <S.Container>
      <S.Title src="../../utils/steps-title.svg" alt="title" />

      <S.Steps>
        {imgs.map((_, i) => (
          <S.Step
            key={i}
            src={`../../utils/step-${i + 1}.png`}
            alt={`step ${i + 1}`}
          />
        ))}
      </S.Steps>
    </S.Container>
  );
};

export default Steps;
