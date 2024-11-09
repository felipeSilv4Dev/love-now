import { useEffect, useState } from 'react';
import * as S from './Page.styled';

const Page = ({ data }: { data: Inputs[] }) => {
  const dataImage = data.flatMap((image) => image.photo);
  const images = dataImage.map((image) => URL.createObjectURL(image));
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const imagesTime = setInterval(() => {
      if (count < images.length - 1) {
        setCount(count + 1);
      } else {
        setCount(0);
      }
    }, 3000);

    return () => clearInterval(imagesTime);
  }, [count, setCount, images]);

  return (
    <S.Container>
      {data.map((el, index) => (
        <S.Title key={index}>{el.name}</S.Title>
      ))}

      <S.ContainerImage>
        {images.map((image, index) => (
          <S.Image
            key={index}
            src={image}
            $active={count === index}
            alt="image couple"
          />
        ))}
      </S.ContainerImage>
    </S.Container>
  );
};

export default Page;
