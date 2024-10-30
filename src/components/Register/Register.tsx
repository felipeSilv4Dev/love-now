import * as U from '../../styles/utils/utils.styled';
import Form from '../Form/Form';
import * as S from './Register.styled';

const Register = () => {
  return (
    <U.Container $bg={'../../utils/register.jpg'}>
      <U.TextBox>
        <S.Header>
          <U.Title $animation>Cadastro</U.Title>
          <U.Button to={'/'}>Voltar</U.Button>
        </S.Header>
        <Form />
      </U.TextBox>
    </U.Container>
  );
};

export default Register;
