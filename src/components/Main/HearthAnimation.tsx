import * as S from './Heath.styled';

const HearthAnimation = () => {
  return (
    <div>
      <S.WapperHeath $position={80} $time={7} $type={'top'}>
        <S.Hearth
          $opacity={0.4}
          $height={12}
          src="../../utils/hearth.svg"
          alt="image hearth"
        />
      </S.WapperHeath>

      <S.WapperHeath $position={30} $time={10} $type={'bottom'}>
        <S.Hearth
          $opacity={0.8}
          $height={10}
          src="../../utils/hearth.svg"
          alt="image hearth"
        />
      </S.WapperHeath>

      <S.WapperHeath $position={10} $time={11} $type={'top'}>
        <S.Hearth
          $opacity={0.75}
          $height={35}
          src="../../utils/hearth.svg"
          alt="image hearth"
        />
      </S.WapperHeath>

      <S.WapperHeath $position={60} $time={8} $type={'bottom'}>
        <S.Hearth
          $opacity={1}
          $height={30}
          src="../../utils/hearth.svg"
          alt="image hearth"
        />
      </S.WapperHeath>

      <S.WapperHeath $position={90} $time={9} $type={'bottom'}>
        <S.Hearth
          $opacity={0.8}
          $height={10}
          src="../../utils/hearth.svg"
          alt="image hearth"
        />
      </S.WapperHeath>

      <S.WapperHeath $position={140} $time={8} $type={'top'}>
        <S.Hearth
          $opacity={0.4}
          $height={40}
          src="../../utils/hearth.svg"
          alt="image hearth"
        />
      </S.WapperHeath>

      <S.WapperHeath $position={150} $time={9} $type={'bottom'}>
        <S.Hearth
          $opacity={0.7}
          $height={25}
          src="../../utils/hearth.svg"
          alt="image hearth"
        />
      </S.WapperHeath>

      <S.WapperHeath $position={130} $time={10} $type={'bottom'}>
        <S.Hearth
          $opacity={1}
          $height={15}
          src="../../utils/hearth.svg"
          alt="image hearth"
        />
      </S.WapperHeath>
    </div>
  );
};

export default HearthAnimation;
