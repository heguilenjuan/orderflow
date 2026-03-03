export type Product = {
    id: string;
    name:string;
    price: number;
    stock: number;
    createdAt: Date;
}

export type ProductCreate = {
    name:string;
    price:number;
    stock:number;
}