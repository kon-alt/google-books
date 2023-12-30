import {useEffect, useState} from 'react';

interface IDebounceProps {
  value: string;
  delay: number;
}

export const useDebounce = ({value, delay}: IDebounceProps) => {
  const [debounceValue, setValue] = useState<string>('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setValue(value);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [value]);

  return {debounceValue};
};
