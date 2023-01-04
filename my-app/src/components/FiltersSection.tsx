import { useState } from 'react';
import styles from './FiltersSection.module.css';
import { IItem } from '../interfaces/interfaces';
import Button from './UI/Button/Button';
import FiltersCheckboxes from './FiltersCheckboxes';

function FiltersSection({
  items,
  category,
}: {
  items: IItem[];
  category: keyof Omit<IItem, 'images'>;
}) {
  const [isActive, setIsActive] = useState(false);

  function toggleIsActive() {
    isActive ? setIsActive(false) : setIsActive(true);
  }

  return (
    <div className={styles.filtersSectionWrapper}>
      <Button
        style={{ width: '100%', borderRadius: '0px' }}
        onClick={toggleIsActive}
      >
        {category === 'price'
          ? `${category[0].toUpperCase() + category.slice(1)}, $`
          : category[0].toUpperCase() + category.slice(1)}
      </Button>
      <FiltersCheckboxes
        isActive={isActive}
        items={items}
        category={category}
      />
    </div>
  );
}

export default FiltersSection;
