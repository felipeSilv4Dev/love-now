import React from 'react';
import * as S from './StarFall.styled';

const StartFall = () => {
  const stars = Array.from({ length: 10 });

  return (
    <S.Container>
      {stars.map((_, index) => (
        <S.Star key={index} />
      ))}
    </S.Container>
  );
};

export default StartFall;
