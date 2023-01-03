import { Link, useSearchParams } from 'react-router-dom';
import { IItem } from '../interfaces/interfaces';
import Item from './Item';
import Filters from './Filters';
import styles from './Main.module.css';
import Loader from './UI/Loader/Loader';

function Main({ items, isLoading }: { items: IItem[]; isLoading: boolean }) {
  const [searchParams, setSearchParams] = useSearchParams('');

  return (
    <div className={styles.main}>
      <Filters items={items} />
      <div className={styles.items}>
        {isLoading ? (
          <Loader />
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
