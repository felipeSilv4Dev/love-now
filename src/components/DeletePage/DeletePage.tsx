import { useEffect } from 'react';
import * as S from './DeletePage.styled';

import Error from '../Error/Error';
import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router';
import Spinner from '../Spinner/Spinner';

const DeletePage = () => {
  const { request, error, data, isLoading } = useFetch();
  const { id } = useParams();

  useEffect(() => {
    request({
      method: 'DELETE',
      url: `${import.meta.env.VITE_URL_API}register/${id}`,
    });
  }, [request, id]);

  if (isLoading) return <Spinner />;

  if (error || !data) return <Error message={error} />;

  return (
    <S.Container>
      <S.Image src="../../utils/trash-delete.svg" alt="Page Delete" />
      <S.ContentBox>
        <S.Title>deletado</S.Title>
        <S.Message>Seus dados foram apagados!</S.Message>
        <S.Home to="/register">voltar</S.Home>
      </S.ContentBox>
    </S.Container>
  );
};

export default DeletePage;
