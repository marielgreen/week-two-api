import { Entity, property, model } from '@loopback/repository';

@model()
export class Products extends Entity {
  @property({
    type: 'number',
    id: true
  })
  id?: number;

  @property({
    type: 'string',
    required: true
  })
  name: string;

  @property({
    type: 'string'
  })
  price: string;


  getId() {
    return this.id;
  }
}
