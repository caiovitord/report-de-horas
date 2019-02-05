import { Developer } from './developer.model';
import { Requisite } from './requisite.model';
import { Entity, model, property, hasMany, belongsTo } from '@loopback/repository';

@model()
export class HourReport extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  hours: number;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @property({
    type: 'number',
    required: true,
  })
  percentCompleted: number;

  @hasMany(() => Developer)
  developers?: Developer[];

  
  @belongsTo(() => Developer)
  developerId?: Developer;


  @hasMany(() => Requisite)
  requisites?: Requisite[];

  constructor(data?: Partial<HourReport>) {
    super(data);
  }
}
