import { Image } from '../../styles/Image.styled';
import * as S from './Error.styled';

const Error = ({
  message,
  statusCode = 404,
}: {
  message: string;
  statusCode?: number;
}) => {
  return (
    <S.Container>
      <Image src="../../utils/error.svg" alt="Page Error" />

      <S.ContentBox>
        <S.Title>error</S.Title>
        <S.Message>
          {message} <S.Status>{statusCode} 💥</S.Status>
        </S.Message>
        <S.Home to="/">voltar</S.Home>
      </S.ContentBox>
    </S.Container>
  );
};

export default Error;
