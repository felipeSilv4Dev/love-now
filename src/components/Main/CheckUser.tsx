import { AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import useFetch from '../../Hooks/useFetch';

interface FetchRequest {
  data: User | unknown;
  isLoading: boolean;
  request: (config: AxiosRequestConfig) => Promise<void>;
  error: string;
}

const CheckUser = (id: string) => {
  const { request, data }: FetchRequest = useFetch();

  const ValidateData = (obj: unknown): obj is User => {
    if (
      obj !== null &&
      typeof obj === 'object' &&
      'photos' in obj &&
      'id' in obj &&
      'name' in obj
    )
      return true;
    return false;
  };
  useEffect(() => {
    request({
      method: 'GET',
      url: `${import.meta.env.VITE_URL_API}register/${id}`,
    });
  }, [request]);

  return data ? ValidateData(data) : false;
};

export default CheckUser;
