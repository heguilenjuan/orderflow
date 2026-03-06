import { IProductRepository } from "../products/IProduct.repository";
import { IOrderRepository } from "./IOrderRepository";


export class OrderService {
    constructor(
        private orderRepo: IOrderRepository,
        private productRepo: IProductRepository
    ) { }

    async createOrder(userId: string, productId: string) {
        const product = await this.productRepo.getProductById(productId)
        if (!product) return { error: 'Producto no encontrado', code: 'NOT_FOUND' }
        if (product.stock <= 0) return { error: 'Sin stock', code: 'CONFLICT' }

        const finalPrice = product.price;

        return await this.orderRepo.createOrder(userId, productId, finalPrice)
    }

    async getOrdersByOrderId(userId: string) {
        return await this.orderRepo.getOrdersByOrderId(userId)
    }
}