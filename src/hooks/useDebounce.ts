import { useEffect, useState } from 'react';

const DEFAULT_DELAY = 400;
const EMPTY_SEARCH_TERM = '';

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay ?? DEFAULT_DELAY);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

type OnChangeHandler = (value: string) => void;

export const useDebouncedSearch = (
  initialValue: string = EMPTY_SEARCH_TERM,
): [string, OnChangeHandler] => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const debouncedValue = useDebounce<string>(searchTerm);

  const handleSearchTermChange: OnChangeHandler = (value) => {
    setSearchTerm(value || '');
  };

  return [debouncedValue, handleSearchTermChange];
};
