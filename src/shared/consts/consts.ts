export interface ICategory {
  title: string;
  products: IProduct[];
}
export interface IProduct {
  id: string;
  imageUrl: string;
  title: string;
  alt: string;
  type: "category" | "product";
  price?: number;
  likable?: boolean;
}
