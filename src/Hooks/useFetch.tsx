import { useCallback, useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState<[] | null>(null);
  const [error, setError] = useState<{
    message: string;
    statusCode: number;
  } | null>({ message: '', statusCode: 404 });
  const [loading, setLoading] = useState<boolean>(false);

  interface RequesteTypes {
    url: string;
    signal: AbortSignal;
  }

  const request = useCallback(async ({ url, signal }: RequesteTypes) => {
    try {
      setLoading(true);
      setData(null);
      setError({ message: '', statusCode: 404 });

      const response = await fetch(url, { signal });

      if (!response.ok) throw new Error(`Usuário não encontrado :`);

      const json = await response.json();
      setData(json.data);
      setLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        setError({ message: err.message, statusCode: 500 });
      }
    }
  }, []);

  return {
    error,
    data,
    loading,
    request,
  };
};

export default useFetch;
