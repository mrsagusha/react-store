import React from 'react';
import { IItem } from '../interfaces/interfaces';

function Favourites({ favourites }: { favourites: IItem[] }) {
  return (
    <div>
      {favourites.map((el) => {
        return <h1>{el.title}</h1>;
      })}
    </div>
  );
}

export default Favourites;
