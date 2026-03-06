import { IProductRepository } from "./IProduct.repository";
import { ProductCreate } from "./product.model";
import { PrismaClient } from '@prisma/client'



export class PrismaProductRepository implements IProductRepository {
    constructor(private prisma: PrismaClient) { }
    async getProducts() {
        const products = await this.prisma.product.findMany()

        return products;
    }

    async getProductById(id: string) {
        const product = await this.prisma.product.findUnique({
            where: { id: id }
        })

        return product
    }

    async createProduct(newProduct: ProductCreate) {
        const product = await this.prisma.product.create({
            data: {
                ...newProduct
            }
        })

        return product
    }
}