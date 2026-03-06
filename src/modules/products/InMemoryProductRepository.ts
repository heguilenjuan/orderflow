import { IProductRepository } from "./IProduct.repository";
import { Product, ProductCreate } from "./product.model";
import { products } from '../mocks/products';


export class InMemoryProductRepository implements IProductRepository {

    async getProducts() {
        return products;
    };

    async getProductById(id: string) {
        const findProduct = products.find((prod) => prod.id === id);

        return findProduct ? findProduct : null;
    }

    async createProduct(newProduct: ProductCreate) {
        const producto = { ...newProduct, createdAt: new Date(), id: `${Math.random()}-prod` }
        products.push(producto);

        return producto
    }
}