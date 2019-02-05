import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './db.datasource.json';

export class DbDataSource extends juggler.DataSource {
  static dataSourceName = 'Db';

  constructor(
    @inject('datasources.config.Db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
