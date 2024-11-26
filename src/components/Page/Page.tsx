import React from 'react';
import { useEffect, useState } from 'react';
import * as S from './Page.styled';
import Map from './Map';

const data = [
  {
    name: 'son goku',
    photos: ['../../utils/teste-goku.jpg', '../../utils/teste-gabi.jpg'],
    quality: ['super-sayajin', 'guerreiro Z', 'kakaroto'],
    message:
      "Camila, dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.,Camila, dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Camila, dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Camila, dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
const Page = () => {
  const images = data.flatMap((image) => image.photos);
  // const images = dataImage.map((image) => URL.createObjectURL(image));
  const [count, setCount] = useState<number>(0);
  const [width, setWidth] = useState(false);

  useEffect(() => {
    const imagesTime = setInterval(() => {
      if (count < images.length - 1) {
        setWidth(true);
        setCount(count + 1);
      } else {
        setWidth(true);
        setCount(0);
      }
    }, 6000);

    return () => {
      setWidth(false);
      clearInterval(imagesTime);
    };
  }, [count, setCount, images]);

  const handlerChangeIndex = (index: number) => {
    if (count === index) return;
    setCount(index);
    setWidth(true);
  };
  return (
    <S.Container>
      <S.PhotosBox>
        <S.ContainerImage>
          {images.map((img, index) => (
            <S.Image key={index} $src={img} $active={count === index} />
          ))}
        </S.ContainerImage>
        {data.map((el, _) => (
          <S.Name key={_}>
            <S.LoadingWidth $width={width} />
            {el.name}
          </S.Name>
        ))}

        <S.Control>
          {images.map((_, index) => (
            <S.Index
              onClick={() => handlerChangeIndex(index)}
              key={index}
              $active={count === index}
            />
          ))}
        </S.Control>
      </S.PhotosBox>

      <S.TitleMap src="../../utils/title-map.svg" alt="title map" />
      {data.map((el) => (
        <Map key={el.name} name={el.name} />
      ))}

      <S.TitleQuality src="../../utils/quality.svg" alt="title map" />
      <S.QualityBox>
        {data.map((el) =>
          el.quality.map((el, i) => <S.Quality key={i}>{el}</S.Quality>)
        )}
      </S.QualityBox>

      {data.map((el, i) => (
        <S.Message key={i}>{el.message}</S.Message>
      ))}
    </S.Container>
  );
};

export default Page;
