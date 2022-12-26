import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import Search from './Search';
import logo from '../assets/logo.png';
import styles from './Header.module.css';
import FavouritesIcon from './UI/Favourites/FavouritesIcon';

function Header({ favouritesQuantity }: { favouritesQuantity: string }) {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      {useLocation().pathname === '/' && <Search />}
      <div className={styles.tabs}>
        <Link to="favourites">
          <FavouritesIcon quantity={favouritesQuantity} />
        </Link>
        <Link to="cart">
          <AiOutlineShoppingCart className={styles.cart} title="Cart" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
