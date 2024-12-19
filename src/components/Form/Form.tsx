import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import * as S from './Form.styled';
import { loadStripe } from '@stripe/stripe-js';

import axios from 'axios';

type Key = {
  key: 'quality' | 'photos';
};
interface PropsRemoveItem<T> extends Key {
  index: number;
  items: T[];
  setItems: React.Dispatch<React.SetStateAction<T[]>>;
}

interface PropsAddItems<T> extends Key {
  prevItems: T[];
  value: T | T[];
}
interface PropsRemoveItem<T> extends Key {
  index: number;
  items: T[];
  setItems: React.Dispatch<React.SetStateAction<T[]>>;
}

const schema = yup.object({
  name: yup
    .string()
    .trim()
    .required('Por favor, preencha o campo de nome antes de enviar.')
    .min(3, 'O nome deve ter pelo menos 3 letras')
    .matches(
      /^([a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð '])+$/u,
      'Digite apenas letras'
    ),
  message: yup
    .string()
    .trim()
    .required('Por favor, preencha o campo de mensagem antes de enviar.')
    .min(3, 'A mensagem deve ter pelo menos 3 letras')
    .max(1000, 'O texto deve ter no máximo 1000 palavras'),
  photos: yup
    .mixed<File[]>()
    .required('Por favor, selecione de 1 a 3 fotos!')
    .test('fileCount', 'Por favor, só aceitamos apenas imagens', (files) => {
      const [contians] = files.map((file) => file.type.startsWith('image'));
      return contians;
    }),
  quality: yup
    .mixed<string[]>()
    .required('dsasdasd')
    .test(
      'typeError',
      'Por favor, escreva uma qualidade antes de enviar!',
      (doc) => {
        return !!doc.length;
      }
    ),
});

const Form = ({
  setData,
}: {
  setData: React.Dispatch<React.SetStateAction<User>>;
}) => {
  const [isloading, setIsLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [qualitys, setQualitys] = useState<string[]>([]);
  const [qualityValue, setQualityValue] = useState<string>('');
  const porcentage = 100 / 3;

  const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_SECRET_KEY}`);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      quality: qualitys,
    },
  });
  const photosWatch = watch('photos');

  useEffect(() => {
    if (photosWatch) clearErrors('photos');
  }, [clearErrors, photosWatch]);

  const createUser = async (data: Inputs) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('message', data.message);

    data.quality.forEach((qualityData) => {
      formData.append('quality', qualityData);
    });

    // Adiciona as fotos ao FormData
    data.photos.forEach((photo) => {
      formData.append('photos', photo);
    });

    const res = await fetch(`${import.meta.env.VITE_URL_API}register`, {
      method: 'POST',
      body: formData,
    });
    return await res.json();
  };

  const handlerDatas: SubmitHandler<Inputs> = async (data) => {
    try {
      if (data.photos.length > 3) {
        setError('photos', { message: 'o limite é apenas 3 fotos!' });
        setTimeout(() => clearErrors('photos'), 2000);
        return;
      }
      setIsLoading(true);
      const user = await createUser(data);

      const session = await axios(
        `${import.meta.env.VITE_URL_API}register/checkout-session/${user.id}`
      );
      const stripe = await stripePromise;

      stripe?.redirectToCheckout({ sessionId: session.data.session.id });
    } catch (err) {
      if (err instanceof Error) alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const verificateType = <T extends string | File>(key: string, array: T[]) => {
    if (key === 'photos' && array.every((item) => item instanceof File)) {
      setValue(key, array as File[]);
    } else if (
      key === 'quality' &&
      array.every((item) => typeof item === 'string')
    ) {
      setValue(key, array as string[]);
    }
  };

  const handleAddItems = <T extends string | File>({
    prevItems,
    value,
    key,
  }: PropsAddItems<T>): T[] => {
    const newItems = Array.isArray(value) ? value : [value];
    const itemsAmount = [...prevItems, ...newItems];
    verificateType(key, itemsAmount);
    return itemsAmount;
  };

  const handleSelectedPhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const filesArray = Array.from(files);

      setSelectedFiles((file) => {
        if (file.length <= 2) {
          return handleAddItems({
            prevItems: file,
            value: filesArray,
            key: 'photos',
          });
        }
        return file;
      });

      e.target.value = '';
    }
  };

  const setErrorQuality = (message: string) => {
    return setError('quality', { message });
  };

  const handleValidateValue = (value: string) => {
    if (value.length > 15) {
      return setErrorQuality(
        'Por favor,a palavra deve ter no máximo 15 caracteres!'
      );
    }
    if (!value) {
      return setErrorQuality(
        'Por favor, escreva uma qualidade antes de adicionar!'
      );
    }
    if (value.length < 4) {
      return setErrorQuality(
        'Por favor,a palavra deve ter no minímo 4 caracteres!'
      );
    }
    return true;
  };

  const handleSelectedQuality = (value: string) => {
    clearErrors('quality');

    if (handleValidateValue(value)) {
      setQualitys((prevQualitys) => {
        if (prevQualitys.length <= 5) {
          return handleAddItems({
            prevItems: prevQualitys,
            value,
            key: 'quality',
          });
        }
        return prevQualitys;
      });

      setQualityValue('');
    }
  };

  const handleRemoveItem = <T extends string | File>({
    index,
    key,
    items,
    setItems,
  }: PropsRemoveItem<T>) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);

    verificateType(key, newItems);
  };

  const shortNamePhoto = (quality: string, index: number) =>
    `${index + 1}º ${quality.split('.')[0].slice(0, 4)}.${
      quality.split('.')[1]
    }`;

  const handleRemovePhoto = (index: number) =>
    handleRemoveItem({
      index,
      key: 'photos',
      items: selectedFiles,
      setItems: setSelectedFiles,
    });

  const showErroPhotos = errors.photos
    ? errors.photos.message
    : `selecione ${selectedFiles.length}/3`;

  const showPhotos = errors.photos ? (
    <S.TextErrorPhoto $error={!!errors.photos}>
      <S.TextContainerPhotos>
        <p>{errors.photos.message}</p>
      </S.TextContainerPhotos>
    </S.TextErrorPhoto>
  ) : (
    selectedFiles.map((quality, index) => (
      <S.TextContent key={index}>
        <span>{shortNamePhoto(quality.name, index)}</span>

        <S.Close
          onClick={() => handleRemovePhoto(index)}
          src="../../utils/trash.svg"
          alt="image trash"
        />
      </S.TextContent>
    ))
  );

  const handleButtonQualitys = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSelectedQuality(qualityValue);
  };

  const handleRemoveQualitys = (index: number) =>
    handleRemoveItem({
      index,
      key: 'quality',
      items: qualitys,
      setItems: setQualitys,
    });

  const showQualitys = qualitys.map((quality, index) => (
    <S.TextContent key={index + 1}>
      <span>{quality}</span>
      <S.Close
        onClick={() => handleRemoveQualitys(index)}
        src="../../utils/trash.svg"
        alt="image trash"
      />
    </S.TextContent>
  ));

  useEffect(() => {
    if (!qualitys.length) {
      const qualitys = ['meiga', 'linda', 'gata'];
      setData((data) => ({ ...data, quality: qualitys }));

      return;
    }
    setData((data) => ({ ...data, quality: qualitys }));
  }, [qualitys]);

  useEffect(() => {
    if (!selectedFiles.length) {
      const imgs = [
        '../../utils/photo-preview.png',
        '../../utils/photo-preview.png',
        '../../utils/photo-preview.png',
      ];
      setData((data) => ({ ...data, photos: imgs }));
      return;
    }

    const imgs = selectedFiles.map((file) => URL.createObjectURL(file));
    setData((data) => ({ ...data, photos: imgs }));
  }, [selectedFiles]);

  return (
    <S.Form onSubmit={handleSubmit(handlerDatas)}>
      <S.InputBox>
        <S.InputPhoto
          htmlFor="photos"
          $error={!!errors.photos}
          $fill={selectedFiles.length * porcentage}
        >
          <input
            id="photos"
            type="file"
            accept="image/*"
            multiple
            onChange={handleSelectedPhotos}
            placeholder="Selecione uma foto"
            disabled={selectedFiles.length === 3}
          />
          <S.PhotoFill $fill={selectedFiles.length * porcentage}>
            <S.ImagePhoto src="../../utils/photo.svg" alt="icon photo" />
          </S.PhotoFill>
        </S.InputPhoto>

        <S.TextErrorPhoto $error={!!errors.photos}>
          <S.TextContainerPhotos>
            {selectedFiles.length ? showPhotos : <p>{showErroPhotos}</p>}
          </S.TextContainerPhotos>
        </S.TextErrorPhoto>
      </S.InputBox>

      <S.InputBox>
        <S.Input
          type="text"
          placeholder="Para quem é..."
          {...register('name')}
          $error={!!errors.name}
          onChange={({ target }) =>
            setData((data) => ({ ...data, name: target.value }))
          }
        />

        <S.TextError $error={!!errors.name}>
          {errors.name ? errors.name.message : 'Nome'}
        </S.TextError>
      </S.InputBox>

      <S.InputBox>
        <S.Message
          placeholder="Escreva aqui sua linda mensagem..."
          {...register('message')}
          $error={!!errors.message}
          onChange={({ target }) =>
            setData((data) => ({ ...data, message: target.value }))
          }
        />

        <S.TextError $error={!!errors.message}>
          {errors.message ? errors.message.message : 'Mensagem'}
        </S.TextError>
      </S.InputBox>

      <S.InputBox>
        <S.BoxQuality>
          <S.Input
            placeholder="linda..."
            {...register('quality')}
            $error={!!errors.quality}
            autoComplete="on"
            value={qualityValue}
            onChange={({ target }) => setQualityValue(target.value)}
            onBlur={({ target }) => target.blur()}
          />

          <S.ButtonQuality
            disabled={qualitys.length === 6}
            onClick={handleButtonQualitys}
          >
            Adicionar
          </S.ButtonQuality>
        </S.BoxQuality>

        <S.TextError $error={!!errors.quality}>
          {errors.quality ? errors.quality.message : 'Qualidade'}
        </S.TextError>

        <S.TextContainerQualitys>
          {qualitys.length ? (
            showQualitys
          ) : (
            <S.TextContent>Adicione no máximo 6 apelidos...</S.TextContent>
          )}
        </S.TextContainerQualitys>
      </S.InputBox>

      <S.ButtonSubmit
        disabled={qualitys.length <= 0 || isloading}
        type="submit"
      >
        {isloading ? 'Finalizando...' : 'Finalizar'}
      </S.ButtonSubmit>
    </S.Form>
  );
};

export default Form;
