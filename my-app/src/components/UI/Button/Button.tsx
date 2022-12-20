import React from 'react';
import { ButtonProps } from '../../../interfaces/interfaces';
import styles from '../../Item.module.css';

function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className={styles.buyButton}>
      {children}
    </button>
  );
}

export default Button;
