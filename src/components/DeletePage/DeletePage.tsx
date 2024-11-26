import React from 'react';
import * as S from './DeletePage.styled';

import HearthAnimation from '../Main/HearthAnimation';

const DeletePage = () => {
  return (
    <S.Container>
      <S.Image src="../../utils/trash-delete.svg" alt="Page Delete" />
      <S.ContentBox>
        <S.Title src="../../utils/title-delete.svg" alt="Page delete" />
        <S.Message>Seus dados foram apagados!</S.Message>
        <S.Home to="/register">Criar minha página novamente</S.Home>
      </S.ContentBox>
      <HearthAnimation />
    </S.Container>
  );
};

export default DeletePage;
