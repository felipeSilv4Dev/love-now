import { useEffect, useState } from 'react';
import * as S from './Page.styled';
import UseMatch from '../../Hooks/useMatch';

const Preview = ({ data }: { data: User | null }) => {
  const [count, setCount] = useState<number>(0);
  const [width, setWidth] = useState(true);
  const match = UseMatch(48);
  const ValidateData = (obj: unknown): obj is User => {
    if (obj !== null && typeof obj === 'object' && 'photos' in obj) return true;
    return false;
  };

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

  if (ValidateData(data)) {
    return (
      <S.Container>
        <S.Title>{data.name}</S.Title>
        <S.PhotosBox>
          <S.ContainerImage>
            {data.photos.length <= 3 &&
              data.photos.map((img, index) => (
                <S.Image key={index} $src={img} $active={count === index} />
              ))}
          </S.ContainerImage>

          <S.Name>
            {width && <S.LoadingWidth />}
            {data.name}
          </S.Name>

          {data.photos.length > 1 && (
            <S.Control>
              {data.photos.length <= 3 &&
                data.photos.map((_, index) => (
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
        <S.QualityBox $quantity={data.quality.length > (match ? 2 : 4)}>
          {data.quality.map((el, i) => (
            <S.Quality key={i}>{el}</S.Quality>
          ))}
        </S.QualityBox>

        <S.Message>{data.message}</S.Message>
      </S.Container>
    );
  }
};

export default Preview;
