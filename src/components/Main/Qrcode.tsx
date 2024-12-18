import * as S from './Main.styled';

const Qrcode = ({ id }: { id: string }) => {
  return (
    <S.QrcodeBox>
      <S.QrCodeText>baixar meu qrCode</S.QrCodeText>
      <S.Button to={`/check-copy/${id}`}>baixar</S.Button>
    </S.QrcodeBox>
  );
};

export default Qrcode;
