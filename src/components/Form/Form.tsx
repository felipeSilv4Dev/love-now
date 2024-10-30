import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import * as S from './Form.styled';

type Inputs = {
  name: string;
  photo: File[];
};

const schema = yup.object({
  name: yup
    .string()
    .trim()
    .required('O nome é obrigatório')
    .min(3, 'O nome deve ter pelo menos 3 letras')
    .matches(
      /^([a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð '])+$/u,
      'Digite apenas letras'
    ),

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
});

const Form = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

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

  return (
    <S.Form onSubmit={handleSubmit(handlerDatas)}>
      <S.InputBox $error={!!errors.name}>
        <S.Input
          type="text"
          placeholder="Nome"
          {...register('name')}
          $error={!!errors.name}
        />
        {<span>{errors.name ? errors.name.message : 'Nome '}</span>}
      </S.InputBox>
      <div>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleSelectedPhotos}
          placeholder="Selecione uma foto"
        />
        {errors.photo && <span>{errors.photo.message}</span>}
      </div>
      <button type="submit">enviar</button>
    </S.Form>
  );
};

export default Form;
