import { IProductRepository } from "./IProduct.repository";
import { Product, ProductCreate } from "./product.model";
import productMock from '../mocks/products';


export class InMemoryProductRepository implements IProductRepository {

    async getProducts() {
        return productMock ? productMock : [];
    };

    async getProductById(id: string) {

    }

    async createProduct(newProduct) {
        productMock.push(newProduct);
    }
}