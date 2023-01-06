import { BrowserRouter, Routes, Route, Params } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IItem, IData } from './interfaces/interfaces';
import './App.css';
import Main from './components/Main';
import MainLayout from './layoutes/MainLayout';
import SingleItem from './components/SingleItem';
import Favourites from './components/Favourites';
import OrderPage from './components/OrderPage';

const API_URL = 'https://dummyjson.com/products';

function App() {
  const [items, setItems] = useState<IItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favourites, setFavourites] = useState<IItem[]>([]);
  const [favouritesQuantity, setFavouritesQuantity] = useState('0');
  const [itemsInCart, setItemsInCart] = useState<IItem[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data: IData) => setItems(data.products))
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  function findItemHandler(params: Readonly<Params<string>>) {
    return items.find((el: IItem) => el.title === params.title);
  }

  function toggleFavouritesHandler(item: IItem) {
    if (!favourites.includes(item)) {
      setFavourites([...favourites, item]);
      setFavouritesQuantity((+favouritesQuantity + 1).toString());
    } else {
      setFavourites([...favourites.filter((el: IItem) => el !== item)]);
      setFavouritesQuantity((+favouritesQuantity - 1).toString());
    }
  }

  function addItemInCartHandler(item: IItem) {
    if (!itemsInCart.includes(item)) {
      setItemsInCart([item]);
    }
  }

  function toggleItemInCartHandler(item: IItem) {
    if (!itemsInCart.includes(item)) {
      setItemsInCart([...itemsInCart, item]);
    } else {
      setItemsInCart([...itemsInCart.filter((el: IItem) => el !== item)]);
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout
                favouritesQuantity={favouritesQuantity}
                itemsInCart={itemsInCart}
                toggleItemInCart={toggleItemInCartHandler}
              />
            }
          >
            <Route
              index
              element={
                <Main
                  items={items}
                  isLoading={isLoading}
                  addItemInCart={addItemInCartHandler}
                />
              }
            />
            <Route
              path="favourites"
              element={
                <Favourites
                  favourites={favourites}
                  addItemInCart={addItemInCartHandler}
                />
              }
            />
            <Route
              path="/:title"
              element={
                <SingleItem
                  items={items}
                  isLoading={isLoading}
                  findItem={findItemHandler}
                  toggleFavourites={toggleFavouritesHandler}
                  toggleItemInCart={toggleItemInCartHandler}
                  favourites={favourites}
                  itemsInCart={itemsInCart}
                  addItemInCart={addItemInCartHandler}
                />
              }
            />
            <Route
              path="checkout"
              element={
                <OrderPage
                  itemsInCart={itemsInCart}
                  toggleItemInCart={toggleItemInCartHandler}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
