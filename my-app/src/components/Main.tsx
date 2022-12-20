import styles from './Main.module.css';
import { Link } from 'react-router-dom';
import Item from './Item';
import { IItem } from '../interfaces/interfaces';

function Main({ items, isLoading }: { items: IItem[]; isLoading: boolean }) {
  return (
    <div className={styles.main}>
      <div className={styles.filters}></div>
      <div className={styles.items}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          items.map((el) => {
            return (
              <Link to={el.title}>
                <Item {...el} key={el.id} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Main;
