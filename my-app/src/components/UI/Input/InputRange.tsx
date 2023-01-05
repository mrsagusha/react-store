import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Input from './Input';
import styles from './InputRange.module.css';

function InputRange({
  maxValue,
  category,
}: {
  maxValue: number;
  category: string;
}) {
  const [inputValue, setInputValue] = useState('0');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get(category)) setInputValue(searchParams.get(category)!);
  }, []);

  return (
    <div className={styles.inputRangeWrapper}>
      <Input
        className={styles.inputValuesSectionLeft}
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Input
        className={styles.inputRange}
        type="range"
        value={inputValue}
        max={maxValue}
        min="0"
        step="1"
        onChange={(e) => {
          if (inputValue) setInputValue(e.target.value);
          searchParams.set(category, e.target.value);
          setSearchParams(searchParams);
        }}
      />
      <Input
        className={styles.inputValuesSectionRight}
        type="text"
        value={maxValue}
      />
    </div>
  );
}

export default InputRange;
