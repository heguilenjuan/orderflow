import express from 'express';
import { ProductService } from './src/modules/products/product.service';
import { ProductController } from './src/modules/products/product.controller';
import { PrismaProductRepository } from './src/modules/products/PrismaProductRepository';
import { PrismaClient } from '@prisma/client'


const app = express();
app.use(express.json())

const prisma = new PrismaClient()
const productRepository = new PrismaProductRepository(prisma);
const productService = new ProductService(productRepository);
const productController = new ProductController(productService)


app.use(productController.router)

app.listen(3000, () => console.log('Server running on port 3000'))