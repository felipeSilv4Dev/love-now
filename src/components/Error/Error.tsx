import { Image } from '../../styles/Image.styled';
import HearthAnimation from '../Main/HearthAnimation';
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
      <S.Message>
        Error: <S.Status>{statusCode}</S.Status> {message}
        💥
        <S.Home to="/">voltar para o início</S.Home>
      </S.Message>
      <HearthAnimation />
    </S.Container>
  );
};

export default Error;
