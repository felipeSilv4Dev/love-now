import { useState } from 'react';
import * as S from './Check.styled';

const Check: React.FC = () => {
  const [copied, setCopied] = useState('');

  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);

      setTimeout(() => setCopied(''), 2000); // Reseta o estado após 2 segundos
    } catch (error) {
      alert('Falha ao copiar o texto.');
    }
  };

  console.log(copied);
  return (
    <S.Container>
      <S.Content>
        <S.ContainerUrl>
          <S.Url>https://alguém/idaleatorio123</S.Url>
          <S.Copy onClick={() => copyText('Texto para copiar')}>Copiar</S.Copy>
        </S.ContainerUrl>

        <S.ContainerQRCode>
          <S.QRCode></S.QRCode>
          <S.Download>baixar</S.Download>
        </S.ContainerQRCode>
      </S.Content>

      <S.Next to={'page-person'}>Acessar sua páginar</S.Next>
    </S.Container>
  );
};

export default Check;
