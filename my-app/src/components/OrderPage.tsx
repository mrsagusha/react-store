import { useState } from 'react';
import styles from './OrderPage.module.css';
import Button from './UI/Button/Button';
import CreditCard from './UI/CreditCard/CreditCard';
import Input from './UI/Input/Input';
import Payment from './UI/Payment/Payment';

function OrderPage() {
  const [paymentMethod, setPaymentMethod] = useState('');

  function setPaymentMethodHandler(name: string) {
    setPaymentMethod(name);
  }

  return (
    <div className={styles.wrapper}>
      <h1 style={{ marginBottom: '2vw' }}>Shopping cart</h1>
      <div className={styles.itemsList}></div>
      <div className={styles.orderInfo}>
        <div className={styles.contactInformationWrapper}>
          <h1>Contact Information</h1>
          <div className={styles.contactInformation}>
            <form>
              <label className={styles.orderLabel}>
                What's your name?
                <Input
                  style={{ marginTop: '1vw', borderColor: 'black' }}
                  placeholder="Your name"
                />
              </label>
            </form>
            <form>
              <label className={styles.orderLabel}>
                What's your phone number?
                <Input
                  style={{ marginTop: '1vw', borderColor: 'black' }}
                  placeholder="Your phone"
                />
              </label>
            </form>
            <form>
              <label className={styles.orderLabel}>
                What's your e-mail?
                <Input
                  style={{ marginTop: '1vw', borderColor: 'black' }}
                  placeholder="Your e-mail"
                />
              </label>
            </form>
          </div>
        </div>
        <div className={styles.deliveryInformationWrapper}>
          <h1 style={{ marginBottom: '2vw' }}>Delivery adress</h1>
          <form style={{ justifyContent: 'start' }}>
            <label className={styles.orderLabel}>
              Adress:
              <Input
                placeholder="Adress"
                style={{ marginTop: '1vw', borderColor: 'black' }}
              />
            </label>
          </form>
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
          <form className={styles.commentForm}>
            <textarea
              className={styles.orderComment}
              placeholder="Your comment"
            ></textarea>
          </form>
        </div>
        <div className={styles.orderConfirmationWrapper}>
          <h1 style={{ marginBottom: '2vw' }}>Order confirmation</h1>
          <p className={styles.orderTotalSum}>Total: 21312312</p>
          <Button style={{ width: '10vw', height: '2.5vw' }}>
            Place an order
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
