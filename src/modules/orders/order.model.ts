export type Order = {
    id: string;
    userId: string;
    productId: string;
    finalPrice: number;
    createdAt: Date;
}

export type CreateOder = {
    userId:string;
    productId: string;
    finalPrice: number;
}