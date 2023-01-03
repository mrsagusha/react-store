import { IItem } from '../interfaces/interfaces';
import styles from './Cart.module.css';
import Button from './UI/Button/Button';

function Cart({ itemsInCart }: { itemsInCart: IItem[] }) {
  return (
    <div className={styles.cartWrapper}>
      <div className={styles.itemsInCart}>
        {itemsInCart.length > 0 &&
          itemsInCart.map((item: IItem) => {
            return (
              <div className={styles.itemInCartWrapper}>
                <div className={styles.itemInCartImageWrapper}>
                  <img
                    className={styles.itemInCartImage}
                    src={item.images[0]}
                    alt=""
                  />
                </div>
                <div>
                  <p>{item.title}</p>
                  <p className={styles.itemUnderTitle}>
                    {`${Math.floor(
                      item?.price! -
                        item?.price! * (item?.discountPercentage! / 100)
                    )} $`}
                    <span
                      className={styles.discount}
                    >{`${item?.price} $`}</span>
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <div className={styles.amountToBePaid}>
        <p className={styles.totalSum}>Total to be paid: </p>
        <p className={styles.totalSum}>{`${itemsInCart.reduce(
          (sum, item) => sum + item.price,
          0
        )} $`}</p>
      </div>
      <Button
        style={{ display: 'block', margin: '0 auto', marginBottom: '0.5vw' }}
      >
        Place an order
      </Button>
    </div>
  );
}

export default Cart;
