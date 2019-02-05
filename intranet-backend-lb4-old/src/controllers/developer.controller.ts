import { HourReport } from './../models/hour-report.model';
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { Developer } from '../models';
import { DeveloperRepository } from '../repositories';

export class DeveloperController {
  constructor(
    @repository(DeveloperRepository)
    public developerRepository: DeveloperRepository,
  ) { }

  @post('/developers', {
    responses: {
      '200': {
        description: 'Developer model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Developer } } },
      },
    },
  })
  async create(@requestBody() developer: Developer): Promise<Developer> {
    return await this.developerRepository.create(developer);
  }

  @get('/developers/count', {
    responses: {
      '200': {
        description: 'Developer model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Developer)) where?: Where,
  ): Promise<Count> {
    return await this.developerRepository.count(where);
  }

  @get('/developers', {
    responses: {
      '200': {
        description: 'Array of Developer model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Developer } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Developer)) filter?: Filter,
  ): Promise<Developer[]> {
    return await this.developerRepository.find(filter);
  }

  @patch('/developers', {
    responses: {
      '200': {
        description: 'Developer PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() developer: Developer,
    @param.query.object('where', getWhereSchemaFor(Developer)) where?: Where,
  ): Promise<Count> {
    return await this.developerRepository.updateAll(developer, where);
  }

  @get('/developers/{id}', {
    responses: {
      '200': {
        description: 'Developer model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Developer } } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Developer> {
    return await this.developerRepository.findById(id);
  }

  @patch('/developers/{id}', {
    responses: {
      '204': {
        description: 'Developer PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() developer: Developer,
  ): Promise<void> {
    await this.developerRepository.updateById(id, developer);
  }

  @put('/developers/{id}', {
    responses: {
      '204': {
        description: 'Developer PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() developer: Developer,
  ): Promise<void> {
    await this.developerRepository.replaceById(id, developer);
  }

  @del('/developers/{id}', {
    responses: {
      '204': {
        description: 'Developer DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.developerRepository.deleteById(id);
  }


}
