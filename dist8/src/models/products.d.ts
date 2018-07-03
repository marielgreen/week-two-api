import { Entity } from '@loopback/repository';
export declare class Products extends Entity {
    id?: number;
    name: string;
    price: string;
    getId(): number | undefined;
}
