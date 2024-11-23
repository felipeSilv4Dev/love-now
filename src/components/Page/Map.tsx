import { useEffect, useState } from 'react';

const Map = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch('http://localhost:3004/countries', {
          method: 'GET',
          headers: { 'Content-Type': 'application-json' },
        });
        if (!res.ok) throw new Error('countries not found!');
        const js = await res.json();
        setCountries(js);
      } catch (err) {
        if (err instanceof Error) console.log(err.message);
      }
    };
    getCountries();
  }, [setCountries]);

  return <div></div>;
};

export default Map;
