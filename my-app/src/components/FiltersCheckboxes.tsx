import { IItem } from '../interfaces/interfaces';
import styles from './FiltersCheckboxes.module.css';
import Input from './UI/Input/Input';

function FiltersCheckboxes({
  isActive,
  items,
  category,
}: {
  isActive: boolean;
  items: IItem[];
  category: keyof Omit<IItem, 'images'>;
}) {
  function filterItems(array: IItem[], category: keyof Omit<IItem, 'images'>) {
    const seen: any = {};
    const result = array.filter((item: IItem) => {
      if (seen[item[category]]) {
        return false;
      } else {
        seen[item[category]] = true;
        return true;
      }
    });
    return result;
  }

  return (
    <div
      className={
        !isActive
          ? styles.filtersSection
          : `${styles.filtersSection} ${styles.active}`
      }
    >
      {category === 'price' || category === 'stock' ? (
        <Input type="range" />
      ) : (
        filterItems(items, category).map((item: IItem) => {
          return (
            <label key={item.id}>
              <input type="checkbox" />
              {item[category]}
            </label>
          );
        })
      )}
    </div>
  );
}

export default FiltersCheckboxes;
