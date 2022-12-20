import React from 'react';
import styles from './Input.module.css';

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={styles.searchInput} {...props} />;
}

export default Input;
