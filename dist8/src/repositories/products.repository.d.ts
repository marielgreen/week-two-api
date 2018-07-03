import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Products } from '../models/products';
export declare class ProductsRepository extends DefaultCrudRepository<Products, typeof Products.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
