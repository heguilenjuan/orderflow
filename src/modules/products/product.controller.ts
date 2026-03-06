import { ProductService } from "./product.service";
import { Router, Request, Response } from 'express'

export class ProductController {
    public router = Router();

    constructor(
        private service: ProductService
    ) {
        this.router.get('/products', this.getAll.bind(this)),
            this.router.get('/product/:id', this.get.bind(this)),
            this.router.post('/products', this.create.bind(this))
    }

    private async getAll(req: Request, res: Response) {
        const result = await this.service.getProducts()
        return res.status(200).json(result)
    }

    private async get(req: Request, res: Response) {
        const id = req.params.id;
        const result = await this.service.getProductById(id);

        if (!result) { return res.status(404) }

        return res.status(200).json(result)
    }

    private async create(req: Request, res: Response) {
        try {
            const { name, price, stock } = req.body
            const result = await this.service.createProduct({ name, price, stock })
            return res.status(201).json(result)
        } catch (error) {
            return res.status(500).json({ error: 'Error al crear el producto' })
        }
    }
}