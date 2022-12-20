import { useParams } from 'react-router-dom';
import { IItem } from '../interfaces/interfaces';
import Button from './UI/Button/Button';

function SingleItem({ items }: { items: IItem[] }) {
  const params = useParams();
  const item = items.find((el: IItem) => el.title === params.title);

  return (
    <div>
      <img src={item?.images[0]} alt="" />
      <div>
        <p>{item?.price}</p>
        <Button>Купить</Button>
        <p>{item?.description}</p>
      </div>
    </div>
  );
}

export default SingleItem;
