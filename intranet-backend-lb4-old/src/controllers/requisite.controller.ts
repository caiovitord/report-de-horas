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
import {Requisite} from '../models';
import {RequisiteRepository} from '../repositories';

export class RequisiteController {
  constructor(
    @repository(RequisiteRepository)
    public requisiteRepository : RequisiteRepository,
  ) {}

  @post('/requisites', {
    responses: {
      '200': {
        description: 'Requisite model instance',
        content: {'application/json': {schema: {'x-ts-type': Requisite}}},
      },
    },
  })
  async create(@requestBody() requisite: Requisite): Promise<Requisite> {
    return await this.requisiteRepository.create(requisite);
  }

  @get('/requisites/count', {
    responses: {
      '200': {
        description: 'Requisite model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Requisite)) where?: Where,
  ): Promise<Count> {
    return await this.requisiteRepository.count(where);
  }

  @get('/requisites', {
    responses: {
      '200': {
        description: 'Array of Requisite model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Requisite}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Requisite)) filter?: Filter,
  ): Promise<Requisite[]> {
    return await this.requisiteRepository.find(filter);
  }

  @patch('/requisites', {
    responses: {
      '200': {
        description: 'Requisite PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() requisite: Requisite,
    @param.query.object('where', getWhereSchemaFor(Requisite)) where?: Where,
  ): Promise<Count> {
    return await this.requisiteRepository.updateAll(requisite, where);
  }

  @get('/requisites/{id}', {
    responses: {
      '200': {
        description: 'Requisite model instance',
        content: {'application/json': {schema: {'x-ts-type': Requisite}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Requisite> {
    return await this.requisiteRepository.findById(id);
  }

  @patch('/requisites/{id}', {
    responses: {
      '204': {
        description: 'Requisite PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() requisite: Requisite,
  ): Promise<void> {
    await this.requisiteRepository.updateById(id, requisite);
  }

  @put('/requisites/{id}', {
    responses: {
      '204': {
        description: 'Requisite PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() requisite: Requisite,
  ): Promise<void> {
    await this.requisiteRepository.replaceById(id, requisite);
  }

  @del('/requisites/{id}', {
    responses: {
      '204': {
        description: 'Requisite DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.requisiteRepository.deleteById(id);
  }
}
