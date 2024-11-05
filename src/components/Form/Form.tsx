import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import * as S from './Form.styled';

type Inputs = {
  name: string;
  photo: File[];
  message: string;
  quality: string[];
};

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
    .max(200, 'O texto deve ter no máximo 200 palavras'),
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
    .required('Por favor, escreva no minímo uma qualidade!')
    .test('stringCount', 'Por favor, escreva uma qualidade', (doc) => {
      return !!doc.length;
    }),
});

const Form = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [quality, setQuality] = useState<string[]>([]);
  const [qualityValue, setQualityValue] = useState<string>('');
  const som = 100 / 3;

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
      quality: [],
    },
  });

  const photoWatch = watch('photo');
  useEffect(() => {
    if (photoWatch) {
      clearErrors('photo');
    }
  }, [clearErrors, photoWatch]);

  const handlerDatas: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const handleSelectedPhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const filesArray = Array.from(files);
      setSelectedFiles((file) => {
        if (file.length <= 2) {
          const uploadFiles = [...file, ...filesArray];
          setValue('photo', uploadFiles);
          return uploadFiles;
        }
        return file;
      });

      e.target.value = '';
    }
  };

  console.log(errors);
  const handleSelectedQuality = (value: string) => {
    if (value.length > 15) {
      setError('quality', {
        message: 'por favor,a palavra deve ter no minímo 15 caracteres!',
      });
    }
    if (value) {
      setQuality((q) => {
        if (q.length <= 2) {
          const qualityAmount = [...quality, value];
          setValue('quality', qualityAmount);
          return qualityAmount;
        }
        return q;
      });

      setQualityValue('');
    }
  };

  console.log({ quality });
  return (
    <S.Form onSubmit={handleSubmit(handlerDatas)}>
      <S.InputBox>
        <S.InputPhoto
          htmlFor="photo"
          $error={!!errors.photo}
          $fill={selectedFiles.length * som}
        >
          <input
            style={{ display: 'none' }}
            id="photo"
            type="file"
            accept="image/*"
            multiple
            onChange={handleSelectedPhotos}
            placeholder="Selecione uma foto"
            disabled={selectedFiles.length === 3}
          />
          <S.PhotoFill $fill={selectedFiles.length * som}>Foto</S.PhotoFill>
        </S.InputPhoto>
        <S.TextErrorPhoto $error={!!errors.photo}>
          {errors.photo
            ? errors.photo.message
            : `selecione ${selectedFiles.length}/3`}
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
          />

          <S.ButtonQuality onClick={() => handleSelectedQuality(qualityValue)}>
            adicionar
          </S.ButtonQuality>
        </S.BoxQuality>

        <S.TextError $error={!!errors.quality}>
          {errors.quality ? errors.quality.message : 'Qualidade'}
        </S.TextError>
      </S.InputBox>

      <button type="submit">enviar</button>
    </S.Form>
  );
};

export default Form;
