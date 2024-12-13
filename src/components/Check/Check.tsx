import { useState } from 'react';
import * as S from './Check.styled';
import { Highlight } from '../Main/Main.styled';

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
      <S.Title>Instruções</S.Title>
      <S.Content>
        <S.ContainerQRCode>
          <S.QRCode></S.QRCode>
          <S.Download>baixar</S.Download>
        </S.ContainerQRCode>

        <S.ContainerUrl>
          <S.InfoUrlContainer>
            <S.InfoUrl>
              1 - <Highlight>Salve </Highlight>
              esta URL nas suas notas ou em um local de sua preferência.
            </S.InfoUrl>
            <S.InfoUrl>
              2 - Guarde esta URL ou QR Code para não perder o{' '}
              <Highlight>acesso à página</Highlight>.
            </S.InfoUrl>
          </S.InfoUrlContainer>

          <S.URLCopy>
            <S.Url>https://alguém/idaleatorio123</S.Url>
            <S.Copy onClick={() => copyText('Texto para copiar')}>
              Copiar
            </S.Copy>
          </S.URLCopy>
        </S.ContainerUrl>
      </S.Content>

      <S.NexButton to="/">
        <S.Next>Acessar sua páginar</S.Next>
      </S.NexButton>
    </S.Container>
  );
};

export default Check;
