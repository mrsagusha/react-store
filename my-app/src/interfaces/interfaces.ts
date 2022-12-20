export interface IItem {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  srock: number;
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
