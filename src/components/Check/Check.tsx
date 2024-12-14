import { useRef, useState } from 'react';
import * as S from './Check.styled';
import { Highlight } from '../Main/Main.styled';
import { QRCodeSVG } from 'qrcode.react';

const Check = () => {
  const [copied, setCopied] = useState(false);
  const qrCodeRef = useRef<SVGSVGElement>(null);

  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      alert('Falha ao copiar o texto.');
    }
  };

  const qrCodeDownload = () => {
    if (!qrCodeRef.current) return;

    // Get the SVG element
    const svgElement = qrCodeRef.current;

    // Serialize the SVG to a string
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgElement);

    // Create a Blob with the SVG string
    const blob = new Blob([svgString], { type: 'image/svg+xml' });

    // Create a temporary <a> element for downloading
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'qrcode-page.svg';

    // Trigger the download
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
  };

  return (
    <S.Container>
      <S.Title>Instruções</S.Title>
      <S.Content>
        <S.ContainerQRCode>
          <QRCodeSVG
            ref={qrCodeRef}
            value="https://love-now.netlify.app/"
            height={'25rem'}
            width={'25rem'}
          />

          <S.Download onClick={qrCodeDownload}>baixar</S.Download>
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
            <S.Copy onClick={() => copyText('https://alguém/idaleatorio123')}>
              {copied ? 'Copiado!' : 'Copiar'}
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
