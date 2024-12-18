import { useEffect, useRef, useState } from 'react';
import * as S from './Check.styled';
import { Highlight } from '../Main/Main.styled';
import { QRCodeSVG } from 'qrcode.react';
import { useParams } from 'react-router';
import useFetch from '../../Hooks/useFetch';
import { AxiosRequestConfig } from 'axios';
import Error from '../Error/Error';
import Spinner from '../Spinner/Spinner';

interface FetchRequest {
  data: User | unknown;
  isLoading: boolean;
  request: (config: AxiosRequestConfig) => Promise<void>;
  error: string;
}

const Check = () => {
  const [copied, setCopied] = useState(false);
  const qrCodeRef = useRef<SVGSVGElement>(null);
  const params = useParams();

  const { request, data, error, isLoading }: FetchRequest = useFetch();

  const ValidateData = (obj: unknown): obj is User => {
    if (obj !== null && typeof obj === 'object' && 'photos' in obj) return true;
    return false;
  };

  useEffect(() => {
    if (ValidateData(data)) {
      localStorage.setItem('id', JSON.stringify(data.id));
    }
  }, [data]);

  useEffect(() => {
    request({
      method: 'GET',
      url: `${import.meta.env.VITE_URL_API}register/${params.id}`,
    });
  }, [request, params]);

  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
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

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error} />;

  if (!ValidateData(data)) return;
  const url = `https://love-now.netlify.app/${data.slug}/${data.id}`;

  return (
    <S.Container>
      <S.Title>Instruções</S.Title>
      <S.Content>
        <S.ContainerQRCode>
          <QRCodeSVG
            ref={qrCodeRef}
            value={url}
            height={'25rem'}
            width={'25rem'}
          />

          <S.Download onClick={qrCodeDownload}>baixar</S.Download>
        </S.ContainerQRCode>

        <S.ContainerUrl>
          <S.InfoUrlContainer>
            <S.InfoUrl>
              1 - Obrigado pela sua compra para{' '}
              <Highlight>{data.name} </Highlight>
            </S.InfoUrl>
            <S.InfoUrl>
              2 - <Highlight>Salve </Highlight>
              esta URL nas suas notas ou em um local de sua preferência.
            </S.InfoUrl>
            <S.InfoUrl>
              3 - Guarde esta URL ou QR Code para não perder o{' '}
              <Highlight>acesso à página</Highlight>.
            </S.InfoUrl>
          </S.InfoUrlContainer>

          <S.URLCopy>
            <S.Url>{url}</S.Url>
            <S.Copy onClick={() => copyText(url)}>
              {copied ? 'Copiado!' : 'Copiar'}
            </S.Copy>
          </S.URLCopy>
        </S.ContainerUrl>
      </S.Content>

      <S.ButtonContainer>
        <S.NexButton to="/">
          <S.Next>voltar para home</S.Next>
        </S.NexButton>

        <S.NexButton to={url}>
          <S.Next>Acessar sua páginar</S.Next>
        </S.NexButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Check;
