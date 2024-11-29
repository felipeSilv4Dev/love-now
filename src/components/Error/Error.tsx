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

      <S.ContentBox>
        <S.Title src="../../utils/title-error.svg" alt="Page Error" />
        <S.Message>
          {message} <S.Status>{statusCode} 💥</S.Status>
        </S.Message>
        <S.Home to="/">voltar</S.Home>
      </S.ContentBox>
      <HearthAnimation />
      {/* <Image src="../../utils/spinner.svg" alt="spinner" /> */}
    </S.Container>
  );
};

export default Error;
