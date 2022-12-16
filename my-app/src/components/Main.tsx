import { useEffect, useState } from 'react';
import { IItem, IData } from '../interfaces/interfaces';
import styles from './Main.module.css';
import Item from './Item';

const API_URL = 'https://dummyjson.com/products';

function Main() {
  const [items, setItems] = useState<IItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data: IData) => setItems(data.products))
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  console.log(items);

  return (
    <div className={styles.main}>
      <div className={styles.filters}></div>
      <div className={styles.items}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          items.map((el) => {
            return <Item {...el} key={el.id} />;
          })
        )}
      </div>
    </div>
  );
}

export default Main;

/*items.map((el: IItem) => {
  return (
    <Item
      id={el.id}
      title={el.title}
      description={el.description}
      key={el.id}
    />
  );
})*/
