import { Link, useSearchParams } from 'react-router-dom';
import { IItem } from '../interfaces/interfaces';
import Item from './Item';
import Filters from './Filters';
import styles from './Main.module.css';
import Loader from './UI/Loader/Loader';

function Main({
  items,
  isLoading,
  addItemInCart,
}: {
  items: IItem[];
  isLoading: boolean;
  addItemInCart(item: IItem): void;
}) {
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
            .filter((el) => {
              if (searchParams.get('price')) {
                return el.price >= parseInt(searchParams.get('price')!);
              }
              return el;
            })
            .filter((el) => {
              if (searchParams.get('stock')) {
                return el.stock >= parseInt(searchParams.get('stock')!);
              }
              return el;
            })
            .filter((el) => {
              if (searchParams.get('category')) {
                if (
                  searchParams.get('category')!.split('+').includes(el.category)
                )
                  return el;
              } else return el;
            })
            .filter((el) => {
              if (searchParams.get('brand')) {
                if (searchParams.get('brand')!.split('+').includes(el.brand))
                  return el;
              } else return el;
            })
            .map((el) => {
              return (
                <Link to={el.title} key={el.id}>
                  <Item props={el} addItemInCart={addItemInCart} />
                </Link>
              );
            })
        )}
      </div>
    </div>
  );
}

export default Main;
