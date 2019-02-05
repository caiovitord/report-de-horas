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
import {Sprint} from '../models';
import {SprintRepository} from '../repositories';

export class SprintController {
  constructor(
    @repository(SprintRepository)
    public sprintRepository : SprintRepository,
  ) {}

  @post('/sprints', {
    responses: {
      '200': {
        description: 'Sprint model instance',
        content: {'application/json': {schema: {'x-ts-type': Sprint}}},
      },
    },
  })
  async create(@requestBody() sprint: Sprint): Promise<Sprint> {
    return await this.sprintRepository.create(sprint);
  }

  @get('/sprints/count', {
    responses: {
      '200': {
        description: 'Sprint model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Sprint)) where?: Where,
  ): Promise<Count> {
    return await this.sprintRepository.count(where);
  }

  @get('/sprints', {
    responses: {
      '200': {
        description: 'Array of Sprint model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Sprint}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Sprint)) filter?: Filter,
  ): Promise<Sprint[]> {
    return await this.sprintRepository.find(filter);
  }

  @patch('/sprints', {
    responses: {
      '200': {
        description: 'Sprint PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() sprint: Sprint,
    @param.query.object('where', getWhereSchemaFor(Sprint)) where?: Where,
  ): Promise<Count> {
    return await this.sprintRepository.updateAll(sprint, where);
  }

  @get('/sprints/{id}', {
    responses: {
      '200': {
        description: 'Sprint model instance',
        content: {'application/json': {schema: {'x-ts-type': Sprint}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Sprint> {
    return await this.sprintRepository.findById(id);
  }

  @patch('/sprints/{id}', {
    responses: {
      '204': {
        description: 'Sprint PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() sprint: Sprint,
  ): Promise<void> {
    await this.sprintRepository.updateById(id, sprint);
  }

  @put('/sprints/{id}', {
    responses: {
      '204': {
        description: 'Sprint PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() sprint: Sprint,
  ): Promise<void> {
    await this.sprintRepository.replaceById(id, sprint);
  }

  @del('/sprints/{id}', {
    responses: {
      '204': {
        description: 'Sprint DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.sprintRepository.deleteById(id);
  }
}
