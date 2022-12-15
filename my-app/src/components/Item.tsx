import { IItem } from '../interfaces/interfaces';

function Item(props: IItem) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h3>{props.brand}</h3>
    </div>
  );
}

export default Item;
