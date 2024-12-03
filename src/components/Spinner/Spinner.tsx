import React from 'react';
import * as S from './Spinner.styled';
import { Image } from '../../styles/Image.styled';

const Spinner = () => {
  return (
    <S.Container>
      <S.WrapperSpinner>
        <S.Spinner />
      </S.WrapperSpinner>
    </S.Container>
  );
};

export default Spinner;
