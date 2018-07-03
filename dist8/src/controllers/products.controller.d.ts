import { ProductsRepository } from '../repositories/products.repository';
import { Products } from '../models/products';
export declare class ProductsController {
    protected productsRepo: ProductsRepository;
    constructor(productsRepo: ProductsRepository);
    findProducts(): Promise<Products[]>;
}
