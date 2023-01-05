import { useSearchParams } from 'react-router-dom';
import { IItem } from '../interfaces/interfaces';
import styles from './FiltersCheckboxes.module.css';
import InputRange from './UI/Input/InputRange';

function FiltersCheckboxes({
  isActive,
  items,
  category,
}: {
  isActive: boolean;
  items: IItem[];
  category: keyof Omit<IItem, 'images'>;
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  function findMaxValue(category: keyof Omit<IItem, 'images'>): number {
    let maxValue = 0;
    items.forEach((item: IItem) => {
      if (item[category] > maxValue) maxValue = Number(item[category]);
    });
    return maxValue;
  }

  function filterReccuringCategories(
    array: IItem[],
    category: keyof Omit<IItem, 'images'>
  ) {
    const seen: any = {}; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
        <InputRange maxValue={findMaxValue(category)} category={category} />
      ) : (
        filterReccuringCategories(items, category).map((item: IItem) => {
          return (
            <label className={styles.checkboxLabel} key={item.id}>
              <input
                className={styles.checkbox}
                type="checkbox"
                checked={
                  searchParams.get(category)
                    ? searchParams
                        .get(category)!
                        .split('+')
                        .includes(`${item[category]}`)
                      ? true
                      : false
                    : false
                }
                onChange={(e) => {
                  if (e.target.checked) {
                    if (searchParams.get(category)) {
                      searchParams.set(
                        category,
                        `${searchParams.get(category)}+${item[category]}`
                      );
                      setSearchParams(searchParams);
                    } else {
                      searchParams.set(category, `${item[category]}`);
                      setSearchParams(searchParams);
                    }
                  } else {
                    searchParams.set(
                      category,
                      searchParams
                        .get(category)!
                        .split('+')
                        .filter((el) => el !== `${item[category]}`)
                        .join('+')
                    );
                    setSearchParams(searchParams);
                  }
                }}
              />
              {item[category]}
            </label>
          );
        })
      )}
    </div>
  );
}

export default FiltersCheckboxes;
