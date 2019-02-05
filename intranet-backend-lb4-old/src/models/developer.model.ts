import { HourReport } from './hour-report.model';
import {Entity, model, property,hasMany} from '@loopback/repository';

@model()
export class Developer extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @hasMany(() => HourReport)
  hourReports?: HourReport[];

  constructor(data?: Partial<Developer>) {
    super(data);
  }
}
