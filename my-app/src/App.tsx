import { BrowserRouter, Routes, Route, Params } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IItem, IData } from './interfaces/interfaces';
import Main from './components/Main';
import MainLayout from './layoutes/MainLayout';
import Cart from './components/Cart';
import SingleItem from './components/SingleItem';
import './App.css';
import Favourites from './components/Favourites';

const API_URL = 'https://dummyjson.com/products';

function App() {
  const [items, setItems] = useState<IItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favourites, setFavourites] = useState<IItem[]>([]);
  const [favouritesQuantity, setFavouritesQuantity] = useState('0');

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

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<MainLayout favouritesQuantity={favouritesQuantity} />}
          >
            <Route
              index
              element={<Main items={items} isLoading={isLoading} />}
            />
            <Route path="cart" element={<Cart />} />
            <Route
              path="favourites"
              element={<Favourites favourites={favourites} />}
            />
            <Route
              path="/:title"
              element={
                <SingleItem
                  items={items}
                  isLoading={isLoading}
                  findItem={findItemHandler}
                  toggleFavourites={toggleFavouritesHandler}
                  favourites={favourites}
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
