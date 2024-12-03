import React from 'react';
import * as S from './Heath.styled';
const HearthAnimation = () => {
  return (
    <span>
      <S.WapperHeath $position={15} $time={7} $type={'top'}>
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

      <S.WapperHeath $position={40} $time={8} $type={'top'}>
        <S.Hearth
          $opacity={0.4}
          $height={40}
          src="../../utils/hearth.svg"
          alt="image hearth"
        />
      </S.WapperHeath>

      <S.WapperHeath $position={65} $time={9} $type={'bottom'}>
        <S.Hearth
          $opacity={0.7}
          $height={25}
          src="../../utils/hearth.svg"
          alt="image hearth"
        />
      </S.WapperHeath>

      <S.WapperHeath $position={45} $time={10} $type={'bottom'}>
        <S.Hearth
          $opacity={1}
          $height={15}
          src="../../utils/hearth.svg"
          alt="image hearth"
        />
      </S.WapperHeath>
    </span>
  );
};

export default HearthAnimation;
