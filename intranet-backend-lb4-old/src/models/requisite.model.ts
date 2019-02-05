import { HourReport } from './hour-report.model';
import { Sprint } from './sprint.model';
import { Entity, model, property, belongsTo, hasMany } from '@loopback/repository';

@model()
export class Requisite extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  code: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'number',
    required: true,
  })
  area: number;

  @property({
    type: 'number',
    required: true,
  })
  storypoints: number;


  @hasMany(() => Sprint)
  sprints?: Sprint[];

  @hasMany(() => HourReport)
  hourReports?: HourReport[];



  constructor(data?: Partial<Requisite>) {
    super(data);
  }
}
