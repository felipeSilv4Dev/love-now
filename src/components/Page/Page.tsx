import { useEffect, useState } from 'react';
import * as S from './Page.styled';
import { Image } from '../../styles/Image.styled';
import Map from './Map';

const data = [
  {
    name: 'son goku',
    photos: ['../../utils/teste-goku.jpg', '../../utils/teste-gabi.jpg'],
    quality: ['super-sayajin', 'guerreiro Z, kakaroto'],
    message:
      '	Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, nemo consequatur, quisquam soluta, iusto voluptate cumque qui debitis tempora error ipsa delectus porro voluptas? Labore eveniet saepe praesentium deserunt architecto.	Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, nemo consequatur, quisquam soluta, iusto voluptate cumque qui debitis tempora error ipsa delectus porro voluptas? Labore eveniet saepe praesentium deserunt architecto.	Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, nemo consequatur, quisquam soluta, iusto voluptate cumque qui debitis tempora error ipsa delectus porro voluptas? Labore eveniet saepe praesentium deserunt architecto.	Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, nemo consequatur, quisquam soluta, iusto voluptate cumque qui debitis tempora error ipsa delectus porro voluptas? Labore eveniet saepe praesentium deserunt architecto.',
  },
];
const Page = () => {
  const images = data.flatMap((image) => image.photos);
  // const images = dataImage.map((image) => URL.createObjectURL(image));
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
      <S.PhotosBox>
        <S.ContainerImage>
          {images.map((img, index) => (
            <S.Image key={index} $src={img} $active={count === index} />
          ))}
        </S.ContainerImage>
        {data.map((el, _) => (
          <S.Name key={_}>{el.name}</S.Name>
        ))}

        <S.Control>
          {images.map((_, index) => (
            <S.Index key={index} $active={count === index} />
          ))}
        </S.Control>
      </S.PhotosBox>

      <S.TitleMap src="../../utils/title-map.svg" alt="title map" />
      <Map />
    </S.Container>
  );
};

export default Page;
