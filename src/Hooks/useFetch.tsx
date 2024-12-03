import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { useCallback, useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState<User | unknown>({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const request = useCallback(async (config: AxiosRequestConfig) => {
    try {
      setData({});
      setError('');
      setIsLoading(true);

      if (!navigator.onLine) {
        setIsLoading(false);
        setError('Erro de conexão com a internet');
      }

      const response = await axios(config);

      if (response.status !== 200) {
        setError(response.data.message);
      }

      if (response.status === 200) {
        const id = response.data.id;
        setData({ ...response.data, id });
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
      if (err instanceof AxiosError) {
        setError(err.response?.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    error,
    data,
    isLoading,
    request,
  };
};

export default useFetch;
