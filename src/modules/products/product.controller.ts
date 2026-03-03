import { ProductService } from "./product.service";
import { Router, Request, Response } from 'express'

export class ProductController {
    public router = Router();

    constructor(
        private service: ProductService
    ){ 
        this.router.get('/products', this.getAll.bind(this)),
        this.router.get('/poduct/:id', this.get.bind(this)),
        this.router.post('/products',this.create.bind(this))
    }

   private async getAll(req:Request, res:Response){
        const result = await this.service.getProducts()
        if(!result){
            return res.status(404).json({})
        }

        res.status(200).json(result)
   }

   private async get(id:string){



   }

   private async create(){

   }
}