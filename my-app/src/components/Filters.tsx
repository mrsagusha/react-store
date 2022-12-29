import React from 'react';
import { IItem } from '../interfaces/interfaces';
import FiltersSection from './FiltersSection';
import styles from './Filters.module.css';

function Filters({ items }: { items: IItem[] }) {
  return (
    <div className={styles.filters}>
      <FiltersSection items={items} category="price" />
      <FiltersSection items={items} category="brand" />
      <FiltersSection items={items} category="category" />
      <FiltersSection items={items} category="stock" />
    </div>
  );
}

export default Filters;
