import { Image } from '../../styles/Image.styled';
import { Title } from '../../styles/Title.styled';
import Form from '../Form/Form';
import * as S from './Register.styled';

const Register = () => {
  return (
    <S.Container>
      <Image src="../../utils/couple.svg" alt="image undrawn couple" />
      <S.Header>
        <S.Home to="/">Home</S.Home>
        <Title $size={'5rem'}>Preencha o cadastro</Title>
      </S.Header>

      <Form />
    </S.Container>
  );
};

export default Register;
