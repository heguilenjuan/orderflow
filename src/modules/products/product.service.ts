import {ProductCreate } from "./product.model";
import { IProductRepository } from "./IProduct.repository";

export class ProductService {
    constructor(
        private product: IProductRepository
    ) { }

    async getProducts() {
        return await this.product.getProducts()
    }

    async getProductById(productId: string) {
        return await this.product.getProductById(productId)
    }

    async createProduct(newProduct: ProductCreate) {
        return this.product.createProduct(newProduct);
    }

}