import {OrderService} from './order.service';
import {Router, Request, Response} from 'express'

export class OrderController {
    public router = Router();

    constructor(
        private service: OrderService
    ){
        this.router.get('/orders/:userId', this.get.bind(this)),
        this.router.post('/orders', this.create.bind(this))
    }

    private async get(req:Request, res:Response){
        const id = req.params.id;
        const result = await this.service.getOrdersByOrderId(id);

        if(!result){ return res.status(404) }

        return res.status(200).json(result)
    }

    private async create(req:Request, res:Response){
        try{
            const {userId, productId} = req.body
            const result = await this.service.createOrder(userId, productId)

            return res.status(201).json(result)

        } catch(error){
            return res.status(500).json({error: "Error al crear la orden"})
        }
    }
}