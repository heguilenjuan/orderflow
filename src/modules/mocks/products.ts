import { Product } from "../products/product.model"

export const products:Product[] = [   
    {   
        id:"1234",
        name: "product1",
        price: 10,
        stock: 5,
        createdAt:new Date(2026,2,3)
    },
    {
        id:"12",
        name: "product2",
        price: 50,
        stock: 5,
        createdAt: new Date(2026,2,3)
    },
     {
        id:"13",
        name: "product3",
        price: 100,
        stock: 5,
        createdAt: new Date(2026,2,3)
    },
    {
        id:"14",
        name: "product4",
        price: 70,
        stock: 5,
        createdAt: new Date(2026,2,3)
    },
    {
        id:"2",
        name: "product5",
        price: 42,
        stock: 5,
        createdAt:new Date(2026,2,3)
    }
]