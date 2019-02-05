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
import {HourReport} from '../models';
import {HourReportRepository} from '../repositories';

export class HourReportController {
  constructor(
    @repository(HourReportRepository)
    public hourReportRepository : HourReportRepository,
  ) {}

  @post('/hour-reports', {
    responses: {
      '200': {
        description: 'HourReport model instance',
        content: {'application/json': {schema: {'x-ts-type': HourReport}}},
      },
    },
  })
  async create(@requestBody() hourReport: HourReport): Promise<HourReport> {
    return await this.hourReportRepository.create(hourReport);
  }

  @get('/hour-reports/count', {
    responses: {
      '200': {
        description: 'HourReport model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(HourReport)) where?: Where,
  ): Promise<Count> {
    return await this.hourReportRepository.count(where);
  }

  @get('/hour-reports', {
    responses: {
      '200': {
        description: 'Array of HourReport model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': HourReport}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(HourReport)) filter?: Filter,
  ): Promise<HourReport[]> {
    return await this.hourReportRepository.find(filter);
  }

  @patch('/hour-reports', {
    responses: {
      '200': {
        description: 'HourReport PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() hourReport: HourReport,
    @param.query.object('where', getWhereSchemaFor(HourReport)) where?: Where,
  ): Promise<Count> {
    return await this.hourReportRepository.updateAll(hourReport, where);
  }

  @get('/hour-reports/{id}', {
    responses: {
      '200': {
        description: 'HourReport model instance',
        content: {'application/json': {schema: {'x-ts-type': HourReport}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<HourReport> {
    return await this.hourReportRepository.findById(id);
  }

  @patch('/hour-reports/{id}', {
    responses: {
      '204': {
        description: 'HourReport PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() hourReport: HourReport,
  ): Promise<void> {
    await this.hourReportRepository.updateById(id, hourReport);
  }

  @put('/hour-reports/{id}', {
    responses: {
      '204': {
        description: 'HourReport PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() hourReport: HourReport,
  ): Promise<void> {
    await this.hourReportRepository.replaceById(id, hourReport);
  }

  @del('/hour-reports/{id}', {
    responses: {
      '204': {
        description: 'HourReport DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.hourReportRepository.deleteById(id);
  }
}
