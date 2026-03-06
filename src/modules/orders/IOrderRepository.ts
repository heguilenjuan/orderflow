import { Order } from "./order.model";

export interface IOrderRepository {
    createOrder: (userId: string, productId: string, finalPrice: number) => Promise<Order>;
    getOrdersByOrderId: (userId: string) => Promise<Order[]>;
}