import { IItem } from '../interfaces/interfaces';
import styles from './Item.module.css';

function Item(props: IItem) {
  return (
    <div className={styles.itemCard}>
      <div className={styles.imageContainer}>
        <p className={styles.discountPercentage}>
          {`- ${Math.floor(props.discountPercentage)}%`}
        </p>
        <img
          className={styles.itemImage}
          src={props.images[0]}
          alt={props.title.toLocaleLowerCase()}
        />
      </div>
      <div>
        <p className={styles.itemTitle}>{props.title}</p>
        <div className={styles.rating} title={props.rating.toString()}>
          <span className={props.rating >= 1 ? styles.active : ''}></span>
          <span className={props.rating >= 2 ? styles.active : ''}></span>
          <span className={props.rating >= 3 ? styles.active : ''}></span>
          <span className={props.rating >= 4 ? styles.active : ''}></span>
          <span
            className={Math.round(props.rating) === 5 ? styles.active : ''}
          ></span>
        </div>
        <p className={styles.price}>
          {`${Math.floor(
            props.price - props.price * (props.discountPercentage / 100)
          )} $`}
          <span className={styles.discount}>{`${props.price} $`}</span>
        </p>
        <button>Купить</button>
      </div>
    </div>
  );
}

export default Item;
