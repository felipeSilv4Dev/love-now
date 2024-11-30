import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { useCallback, useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const request = useCallback(async (config: AxiosRequestConfig) => {
    try {
      setIsLoading(true);
      const response = await axios(config);

      if (!response.data.status) {
        setError(response.data.message);
      }
      if (response.data.status) setData(response.data);
    } catch (err) {
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
