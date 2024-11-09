import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import * as S from './Form.styled';
import { useNavigate } from 'react-router';

type Key = {
  key: 'quality' | 'photo';
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
  photo: yup
    .mixed<File[]>()
    .required('Por favor, selecione de 1 a 3 fotos!')
    .test('fileCount', 'Por favor, só aceitamos apenas imagens', (files) => {
      const [contians] = files.map((file) => file.type.startsWith('image'));
      return contians;
    })
    .test('fileCount', 'Por favor, selecione no máximo 3 imagens', (files) => {
      return files.length <= 3;
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
  setData: React.Dispatch<React.SetStateAction<Inputs[]>>;
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [qualitys, setQualitys] = useState<string[]>([]);
  const [qualityValue, setQualityValue] = useState<string>('');
  const navigate = useNavigate();
  const porcentage = 100 / 3;

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
  const photoWatch = watch('photo');

  useEffect(() => {
    if (photoWatch) clearErrors('photo');
  }, [clearErrors, photoWatch]);

  const handlerDatas: SubmitHandler<Inputs> = (data) => {
    setData((prevData) => [...prevData, data]);
    navigate(`/${data.name}`);
  };

  const verificateType = <T extends string | File>(key: string, array: T[]) => {
    if (key === 'photo' && array.every((item) => item instanceof File)) {
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
            key: 'photo',
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
        if (prevQualitys.length <= 2) {
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
      key: 'photo',
      items: selectedFiles,
      setItems: setSelectedFiles,
    });

  const showErroPhotos = errors.photo
    ? errors.photo.message
    : `selecione ${selectedFiles.length}/3`;

  const showPhotos = selectedFiles.map((quality, index) => (
    <S.TextQuality key={index}>
      {shortNamePhoto(quality.name, index)}
      <S.Close onClick={() => handleRemovePhoto(index)}>❌</S.Close>
    </S.TextQuality>
  ));

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
    <S.TextQuality key={index + 1}>
      {quality}
      <S.Close onClick={() => handleRemoveQualitys(index)}>❌</S.Close>
    </S.TextQuality>
  ));

  return (
    <S.Form onSubmit={handleSubmit(handlerDatas)}>
      <S.InputBox>
        <S.InputPhoto
          htmlFor="photo"
          $error={!!errors.photo}
          $fill={selectedFiles.length * porcentage}
        >
          <input
            id="photo"
            type="file"
            accept="image/*"
            multiple
            onChange={handleSelectedPhotos}
            placeholder="Selecione uma foto"
            disabled={selectedFiles.length === 3}
          />
          <S.PhotoFill $fill={selectedFiles.length * porcentage}>
            Foto
          </S.PhotoFill>
        </S.InputPhoto>

        <S.TextErrorPhoto $error={!!errors.photo}>
          <S.TextContainerQuality>
            {selectedFiles.length ? showPhotos : showErroPhotos}
          </S.TextContainerQuality>
        </S.TextErrorPhoto>
      </S.InputBox>

      <S.InputBox>
        <S.Input
          type="text"
          placeholder="Nome de quem vai receber..."
          {...register('name')}
          $error={!!errors.name}
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
        />

        <S.TextError $error={!!errors.message}>
          {errors.message ? errors.message.message : 'Mensagem'}
        </S.TextError>
      </S.InputBox>

      <S.InputBox>
        <S.BoxQuality>
          <S.Input
            placeholder="Escreva as qualidades da pessoa"
            {...register('quality')}
            $error={!!errors.quality}
            value={qualityValue}
            onChange={({ target }) => setQualityValue(target.value)}
            onBlur={({ target }) => target.blur()}
          />

          <S.ButtonQuality
            disabled={qualitys.length === 3}
            onClick={handleButtonQualitys}
          >
            Adicionar
          </S.ButtonQuality>
        </S.BoxQuality>

        <S.TextError $error={!!errors.quality}>
          {errors.quality ? errors.quality.message : 'Qualidade'}
        </S.TextError>

        <S.TextContainerQuality>
          {qualitys.length ? (
            showQualitys
          ) : (
            <S.TextQuality>Adicione no máximo 3 qualidades...</S.TextQuality>
          )}
        </S.TextContainerQuality>
      </S.InputBox>

      <S.ButtonSubmit disabled={qualitys.length <= 0} type="submit">
        Criar
      </S.ButtonSubmit>
    </S.Form>
  );
};

export default Form;
