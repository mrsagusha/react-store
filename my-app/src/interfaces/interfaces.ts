export interface IItem {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export interface IData {
  limit: number;
  products: IItem[];
  skip: number;
  total: number;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
}

export interface IFormInput {
  name: string;
  phoneNumber: number;
  mail: string;
  adress: string;
  cardNumber1: number;
  cardNumber2: number;
  cardNumber3: number;
  cardNumber4: number;
  cardDate: number;
}
