import { useEffect, useState } from 'react';
import * as S from './Page.styled';
import useFetch from '../../Hooks/useFetch';
import Error from '../Error/Error';
import Spinner from '../Spinner/Spinner';
import { AxiosRequestConfig } from 'axios';
import { useParams } from 'react-router';
import UseMatch from '../../Hooks/useMatch';

interface FetchRequest {
  data: User | unknown;
  isLoading: boolean;
  request: (config: AxiosRequestConfig) => Promise<void>;
  error: string;
}

const Page = () => {
  const { request, data, error, isLoading }: FetchRequest = useFetch();
  const params = useParams();
  const match = UseMatch(80);

  const [count, setCount] = useState<number>(0);
  const [width, setWidth] = useState(true);
  const [hidden, setHidden] = useState(false);

  const ValidateData = (obj: unknown): obj is User => {
    if (obj !== null && typeof obj === 'object' && 'photos' in obj) return true;
    return false;
  };

  useEffect(() => {
    request({
      method: 'GET',
      url: `${import.meta.env.VITE_URL_API}register/${params.id}`,
    });
  }, [request, params]);

  useEffect(() => {
    setTimeout(() => setHidden(true), 6000);
  }, []);

  useEffect(() => {
    if (!ValidateData(data)) return;

    if (!(data.photos.length > 1)) {
      setWidth(false);
      setCount(0);
      return;
    }

    const imagesTime = setInterval(() => {
      setWidth(false);
      if (data.photos.length - 1 > count) {
        setCount(count + 1);
      } else {
        setCount(0);
      }
    }, 5000);

    return () => {
      setWidth(true);
      clearInterval(imagesTime);
    };
  }, [count, data]);

  const handlerChangeIndex = (index: number) => {
    if (count === index) return;
    setCount(index);
    setWidth(false);
  };

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error} />;

  if (ValidateData(data)) {
    return (
      <S.Container>
        {!hidden && (
          <S.Introduction>
            {' '}
            <S.Title>Para você ❤️</S.Title>
            <S.Title>{data.name} ❤️</S.Title>
          </S.Introduction>
        )}

        <S.Title> {data.name}</S.Title>
        <S.PhotosBox>
          <S.ContainerImage>
            {data.photos.map((img, index) => (
              <S.Image key={index} $src={img} $active={count === index} />
            ))}
          </S.ContainerImage>

          <S.Name>
            {width && <S.LoadingWidth />}
            {data.name}
          </S.Name>

          {data.photos.length > 1 && (
            <S.Control>
              {data.photos.map((_, index) => (
                <S.Index
                  onClick={() => handlerChangeIndex(index)}
                  key={index}
                  $active={count === index}
                />
              ))}
            </S.Control>
          )}
        </S.PhotosBox>

        <S.TitleQuality>você é</S.TitleQuality>
        <S.QualityBox $quantity={data.quality.length > (match ? 4 : 2)}>
          {data.quality.map((el, i) => (
            <S.Quality key={i}>{el}</S.Quality>
          ))}
        </S.QualityBox>

        <S.Message>{data.message}</S.Message>
      </S.Container>
    );
  }
};

export default Page;
