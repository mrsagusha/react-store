import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { IItem } from '../interfaces/interfaces';

function MainLayout({
  favouritesQuantity,
  itemsInCart,
  toggleItemInCart,
}: {
  favouritesQuantity: string;
  itemsInCart: IItem[];
  toggleItemInCart(item: IItem): void;
}) {
  return (
    <>
      <Header
        favouritesQuantity={favouritesQuantity}
        itemsInCart={itemsInCart}
        toggleItemInCart={toggleItemInCart}
      />
      <Outlet />
    </>
  );
}

export default MainLayout;
