import { Entity, property, model } from '@loopback/repository';

@model({
  name: "User"
})
export class Users extends Entity {
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
  password: string;

  @property({
    type: 'string',
    required: true
  })
  email: 'string'


  getId() {
    return this.id;
  }


}
