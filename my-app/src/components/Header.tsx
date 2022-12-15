import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Search from './Search';
import logo from '../assets/logo.png';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <Search />
      <Link to="cart">
        <AiOutlineShoppingCart className={styles.cart} />
      </Link>
    </div>
  );
}

export default Header;
