import { useEffect, useState } from 'react';
import * as S from './Page.styled';
import useFetch from '../../Hooks/useFetch';
import Error from '../Error/Error';
import Spinner from '../Spinner/Spinner';
import { AxiosRequestConfig } from 'axios';

import { useParams } from 'react-router';

declare global {
  interface User {
    id: string;
    name: string;
    photos: Array<string>;
    quality: Array<string>;
    message: string;
  }
}
interface FetchRequest {
  data: User | unknown;
  isLoading: boolean;
  request: (config: AxiosRequestConfig) => Promise<void>;
  error: string;
}

const Page = () => {
  const { request, data, error, isLoading }: FetchRequest = useFetch();
  const params = useParams();

  const [count, setCount] = useState<number>(0);
  const [width, setWidth] = useState(true);

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
    if (!ValidateData(data)) return;

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
    setWidth(true);
  };

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error} />;

  if (ValidateData(data)) {
    return (
      <S.Container>
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

          <S.Control>
            {data.photos.map((_, index) => (
              <S.Index
                onClick={() => handlerChangeIndex(index)}
                key={index}
                $active={count === index}
              />
            ))}
          </S.Control>
        </S.PhotosBox>

        <S.TitleQuality src="../../utils/title-quality.svg" alt="title map" />
        <S.QualityBox $quantity={data.quality.length > 2}>
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
