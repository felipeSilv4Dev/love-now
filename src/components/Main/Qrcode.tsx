import { useEffect, useState } from 'react';
import * as S from './Main.styled';

const Qrcode = () => {
  const [id, setId] = useState('');

  useEffect(() => {
    const item = localStorage.getItem('id');

    if (item) {
      const id = JSON.parse(item);
      setId(id);
    }
  }, []);

  return (
    <S.QrcodeBox>
      <S.QrCodeText>baixar meu qrCode</S.QrCodeText>
      <S.Button to={`/check-copy/${id}`}>baixar</S.Button>
    </S.QrcodeBox>
  );
};

export default Qrcode;
