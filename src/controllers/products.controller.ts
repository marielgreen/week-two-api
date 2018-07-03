import { repository } from '@loopback/repository';
import { ProductsRepository } from '../repositories/products.repository';
import { Products } from '../models/products';
import { HttpErrors, get, param, } from '@loopback/rest';


export class ProductsController {
  constructor(
    @repository(ProductsRepository) protected productsRepo: ProductsRepository,

  ) { }

  @get('/Products')
  async findProducts(): Promise<Products[]> {
    return await this.productsRepo.find();
  }


}
