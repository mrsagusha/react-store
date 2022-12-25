import { Link, useSearchParams } from 'react-router-dom';
import styles from './Main.module.css';
import Item from './Item';
import { IItem } from '../interfaces/interfaces';

function Main({ items, isLoading }: { items: IItem[]; isLoading: boolean }) {
  const [searchParams, setSearchParams] = useSearchParams('');

  return (
    <div className={styles.main}>
      <div className={styles.filters}></div>
      <div className={styles.items}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          items
            .filter((el) => {
              if (searchParams.get('search')) {
                return (el.title && el.description)
                  .toLowerCase()
                  .includes(searchParams.get('search')!.toLowerCase());
              }

              return el;
            })
            .map((el) => {
              return (
                <Link to={el.title} key={el.id}>
                  <Item {...el} />
                </Link>
              );
            })
        )}
      </div>
    </div>
  );
}

export default Main;
