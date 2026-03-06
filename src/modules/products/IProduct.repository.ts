import { Product, ProductCreate } from "./product.model";

export interface IProductRepository{
    getProducts: () => Promise <Product[] | []>;
    getProductById: (id:string) => Promise<Product | null >;
    createProduct: (newProduct:ProductCreate) => Promise<Product>;
}