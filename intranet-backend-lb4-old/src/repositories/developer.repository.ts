import { DefaultCrudRepository, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Developer, HourReport } from '../models';
import { DbDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { HourReportRepository } from '.';

export class DeveloperRepository extends DefaultCrudRepository<
  Developer,
  typeof Developer.prototype.id
  > {


  public readonly hourReports: HasManyRepositoryFactory<
    HourReport,
    typeof HourReport.prototype.id
  >;


  constructor(
    @inject('datasources.Db') dataSource: DbDataSource,
    @repository.getter('HourReportRepository')
    protected hourReportRepositoryGetter: Getter<HourReportRepository>,
  ) {
    super(Developer, dataSource);
    this.hourReports = this.createHasManyRepositoryFactoryFor(
      'hourReports',
      hourReportRepositoryGetter,
    );
  }
}
