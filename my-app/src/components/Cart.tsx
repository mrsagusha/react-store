import { Link } from 'react-router-dom';
import { IItem } from '../interfaces/interfaces';
import styles from './Cart.module.css';
import Button from './UI/Button/Button';

function Cart({
  itemsInCart,
  isHovered,
  toggleItemInCart,
}: {
  itemsInCart: IItem[];
  isHovered: boolean;
  toggleItemInCart(item: IItem): void;
}) {
  return (
    <div
      className={styles.cartWrapper}
      style={isHovered ? { display: 'block' } : { display: 'none' }}
    >
      <div className={styles.itemsInCart}>
        {itemsInCart.length > 0 ? (
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
                  <Button
                    style={{
                      width: '5.5vw',
                      height: '1.2vw',
                      fontSize: '0.5vw',
                    }}
                    onClick={() => toggleItemInCart(item)}
                  >
                    Remove from cart
                  </Button>
                </div>
              </div>
            );
          })
        ) : (
          <p className={styles.emptyCartMessage}>The cart is empty</p>
        )}
      </div>
      {itemsInCart.length > 0 && (
        <>
          <div className={styles.amountToBePaid}>
            <p className={styles.totalSum}>Total to be paid: </p>
            <p className={styles.totalSum}>{`${itemsInCart.reduce(
              (sum, item) =>
                sum +
                Math.floor(
                  item?.price! -
                    item?.price! * (item?.discountPercentage! / 100)
                ),
              0
            )} $`}</p>
          </div>
          <Link to="checkout">
            <Button
              style={{
                display: 'block',
                margin: '0 auto',
                marginBottom: '0.5vw',
              }}
            >
              Place an order
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
