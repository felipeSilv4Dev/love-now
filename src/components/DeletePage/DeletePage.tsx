import React, { useEffect } from 'react';
import * as S from './DeletePage.styled';

import HearthAnimation from '../Main/HearthAnimation';
import Error from '../Error/Error';
import useFetch from '../../Hooks/useFetch';

const DeletePage = () => {
  const { request, data: user, error, loading } = useFetch();

  useEffect(() => {
    const getUser = async () => {
      const controller = new AbortController();
      await request({
        url: `${import.meta.env.VITE_URL_API}/id`,
        signal: controller.signal,
      });

      return () => {
        controller.abort();
      };
    };

    getUser();
  }, [request]);

  if (error?.message)
    return <Error message={error.message} statusCode={error.statusCode} />;

  return (
    <S.Container>
      <S.Image src="../../utils/trash-delete.svg" alt="Page Delete" />
      <S.ContentBox>
        <S.Title src="../../utils/title-delete.svg" alt="Page delete" />
        <S.Message>Seus dados foram apagados!</S.Message>
        <S.Home to="/register">voltar</S.Home>
      </S.ContentBox>
      <HearthAnimation />
    </S.Container>
  );
};

export default DeletePage;
