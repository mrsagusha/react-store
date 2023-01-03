import { useState } from 'react';
import Input from './Input';
import styles from './InputRange.module.css';

function InputRange({ maxValue }: { maxValue: number }) {
  const [inputValue, setInputValue] = useState('0');

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
