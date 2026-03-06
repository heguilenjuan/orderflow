import { IOrderRepository } from "./IOrderRepository";
import { PrismaClient } from '@prisma/client'

export class PrismaOrderRepository implements IOrderRepository{
    constructor(private prisma: PrismaClient){ }

    async createOrder(userId:string, productId:string){

        const order = await this.prisma.order.create({
            data:{
                userId,
                productId,
            }
        })
        
        return order
    }

    async getOrdersByOrderId(userId:string){
        const order = await this.prisma.order.findMany({
            where: { userId},
            orderBy: { createdAt: 'desc'}
        })

        return order
    }


}