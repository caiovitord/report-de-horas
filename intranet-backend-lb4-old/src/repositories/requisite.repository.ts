import { HourReportRepository } from './hour-report.repository';
import { SprintRepository } from './sprint.repository';
import { HourReport } from './../models/hour-report.model';
import { DefaultCrudRepository, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Requisite, Sprint } from '../models';
import { DbDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';

export class RequisiteRepository extends DefaultCrudRepository<
  Requisite,
  typeof Requisite.prototype.id
  > {

  public readonly sprints: HasManyRepositoryFactory<
    Sprint,
    typeof Sprint.prototype.id
  >;

  public readonly hourReports: HasManyRepositoryFactory<
    HourReport,
    typeof HourReport.prototype.id
  >;

  constructor(
    @inject('datasources.Db') dataSource: DbDataSource,
    @repository.getter('SprintRepository')
    protected sprintRepositoryGetter: Getter<SprintRepository>,
    @repository.getter('HourReportRepository')
    protected hourReportRepositoryGetter: Getter<HourReportRepository>,
  ) {
    super(Requisite, dataSource);
    this.sprints = this.createHasManyRepositoryFactoryFor(
      'sprints',
      sprintRepositoryGetter,
    );
    this.hourReports = this.createHasManyRepositoryFactoryFor(
      'hourReports',
      hourReportRepositoryGetter,
    );
  }
}
