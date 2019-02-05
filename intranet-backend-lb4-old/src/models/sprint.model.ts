import { Entity, model, property, hasMany } from '@loopback/repository';
import { Requisite } from './requisite.model';

@model()
export class Sprint extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  startDate: string;

  @property({
    type: 'date',
    required: true,
  })
  dueDate: string;

  @property({
    type: 'number',
    required: true,
  })
  number: number;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @hasMany(() => Requisite)
  requisites: Requisite[];


  constructor(data?: Partial<Sprint>) {
    super(data);
  }
}
