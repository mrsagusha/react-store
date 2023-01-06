import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { IItem, IFormInput } from '../interfaces/interfaces';
import styles from './OrderPage.module.css';
import Button from './UI/Button/Button';
import CreditCard from './UI/CreditCard/CreditCard';
import Input from './UI/Input/Input';
import Payment from './UI/Payment/Payment';

function OrderPage({
  itemsInCart,
  toggleItemInCart,
}: {
  itemsInCart: IItem[];
  toggleItemInCart(item: IItem): void;
}) {
  const [paymentMethod, setPaymentMethod] = useState('');
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInput>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(JSON.stringify(data));
    reset();
  };

  function setPaymentMethodHandler(name: string) {
    setPaymentMethod(name);
  }

  return (
    <div className={styles.wrapper}>
      <h1 style={{ marginBottom: '2vw' }}>Shopping cart</h1>
      <div className={styles.itemsList}>
        {itemsInCart.map((item: IItem) => {
          return (
            <div className={styles.itemInCartWrapper}>
              <div className={styles.itemInCartImageWrapper}>
                <img
                  className={styles.itemInCartImage}
                  src={item.images[0]}
                  alt=""
                />
              </div>
              <div className={styles.itemInCartDescription}>
                <p className={styles.itemInCartTitle}>{item.title}</p>
                <p>{item.description}</p>
              </div>
              <p className={styles.itemInCartPrice}>{`${Math.floor(
                item?.price! - item?.price! * (item?.discountPercentage! / 100)
              )} $`}</p>
              <Button onClick={() => toggleItemInCart(item)}>Remove</Button>
            </div>
          );
        })}
      </div>
      <div className={styles.orderInfo}>
        <form className={styles.orderForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.contactInformationWrapper}>
            <h1>Contact Information</h1>
            <div className={styles.contactInformation}>
              <label className={styles.orderLabel}>
                What's your name?
                <input
                  style={
                    errors.name
                      ? { borderColor: 'red', color: 'red' }
                      : { borderColor: 'black', color: 'black' }
                  }
                  className={styles.inputForm}
                  placeholder="Your name"
                  {...register('name', {
                    required: 'The field is required.',
                    minLength: {
                      value: 3,
                      message: 'Must be at least three characters.',
                    },
                  })}
                />
                {errors.name && (
                  <div className={styles.errorWrapper}>
                    <p className={styles.errorMessage}>{errors.name.message}</p>
                  </div>
                )}
              </label>
              <label className={styles.orderLabel}>
                What's your phone number?
                <input
                  style={
                    errors.phoneNumber
                      ? { borderColor: 'red', color: 'red' }
                      : { borderColor: 'black', color: 'black' }
                  }
                  className={styles.inputForm}
                  placeholder="+375*****-**-**"
                  {...register('phoneNumber', {
                    required: 'The field is required.',
                    pattern: {
                      value:
                        /^\+375(\s+)?\(?(17|29|33|44)\)?(\s+)?[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
                      message: 'Invalid phone number format.',
                    },
                  })}
                />
                {errors.phoneNumber && (
                  <div className={styles.errorWrapper}>
                    <p className={styles.errorMessage}>
                      {errors.phoneNumber.message}
                    </p>
                  </div>
                )}
              </label>
              <label className={styles.orderLabel}>
                What's your e-mail?
                <input
                  style={
                    errors.mail
                      ? { borderColor: 'red', color: 'red' }
                      : { borderColor: 'black', color: 'black' }
                  }
                  className={styles.inputForm}
                  placeholder="Your e-mail"
                  {...register('mail', {
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: 'Invalid e-mail format',
                    },
                  })}
                />
                {errors.mail && (
                  <div className={styles.errorWrapper}>
                    <p className={styles.errorMessage}>{errors.mail.message}</p>
                  </div>
                )}
              </label>
            </div>
          </div>
          <div className={styles.deliveryInformationWrapper}>
            <h1 style={{ marginBottom: '2vw' }}>Delivery adress</h1>
            <label
              className={styles.orderLabel}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              Adress:
              <input
                style={
                  errors.adress
                    ? { borderColor: 'red', color: 'red' }
                    : { borderColor: 'black', color: 'black' }
                }
                className={styles.inputForm}
                placeholder="Adress"
                {...register('adress', {
                  required: 'The field is required.',
                })}
              />
              {errors.adress && (
                <div className={styles.errorWrapper}>
                  <p className={styles.errorMessage}>{errors.adress.message}</p>
                </div>
              )}
            </label>
          </div>
          <div className={styles.paymentInforamationWrapper}>
            <h1 style={{ marginBottom: '2vw' }}>Payment method</h1>
            <div className={styles.paymentInforamation}>
              <Payment
                name="cash"
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethodHandler}
              />
              <Payment
                name="card"
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethodHandler}
              />
              <Payment
                name="courier"
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethodHandler}
              />
            </div>
            {paymentMethod === 'card' && <CreditCard />}
          </div>
          <div className={styles.commentWrapper}>
            <h1 style={{ marginBottom: '2vw' }}>Comment</h1>
            <textarea
              className={styles.orderComment}
              placeholder="Your comment"
            ></textarea>
          </div>
          <div className={styles.orderConfirmationWrapper}>
            <h1 style={{ marginBottom: '2vw' }}>Order confirmation</h1>
            <p className={styles.orderTotalSum}>{`Total: ${itemsInCart.reduce(
              (sum, item) =>
                sum +
                Math.floor(
                  item?.price! -
                    item?.price! * (item?.discountPercentage! / 100)
                ),
              0
            )}$`}</p>
            <Button style={{ width: '10vw', height: '2.5vw' }} type="submit">
              Place an order
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderPage;
