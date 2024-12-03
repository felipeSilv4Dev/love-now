import React from 'react';

const UseMatch = (value: number) => {
  const [match, setMatch] = React.useState<boolean>(false);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = matchMedia(`(max-width:${value}em`);

      setMatch(matches);
    }
    changeMatch();
    window.addEventListener('resize', changeMatch);

    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [value]);

  return match;
};

export default UseMatch;
