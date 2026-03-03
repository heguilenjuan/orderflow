import { Product, ProductCreate } from "./product.model";

export interface IProductRepository{
    getProducts: () => Promise <Product[] | null>;
    getProductById: (id:string) => Promise<Product | null >;
    createProduct: (newProduct:ProductCreate) => void;
}