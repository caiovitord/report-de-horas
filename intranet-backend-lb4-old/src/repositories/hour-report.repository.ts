import { DeveloperRepository } from './developer.repository';
import { Developer } from './../models/developer.model';
import { Requisite } from './../models/requisite.model';
import { DefaultCrudRepository, HasManyRepositoryFactory, repository, BelongsToAccessor } from '@loopback/repository';
import { HourReport } from '../models';
import { DbDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { RequisiteRepository } from './requisite.repository';

export class HourReportRepository extends DefaultCrudRepository<
  HourReport,
  typeof HourReport.prototype.id
  > {

  public readonly requisites: HasManyRepositoryFactory<
    Requisite,
    typeof Requisite.prototype.id
  >;

  public readonly developers: HasManyRepositoryFactory<
    Developer,
    typeof Developer.prototype.id
  >;

  public readonly developerId: BelongsToAccessor<
    Developer,
    typeof Developer.prototype.id
  >;

  constructor(
    @inject('datasources.Db') dataSource: DbDataSource,
    @repository.getter('RequisiteRepository')
    protected requisiteRepositoryGetter: Getter<RequisiteRepository>,
    @repository.getter('DeveloperRepository')
    protected developerRepositoryGetter: Getter<DeveloperRepository>,
  ) {
    super(HourReport, dataSource);
    this.requisites = this.createHasManyRepositoryFactoryFor(
      'requisites',
      requisiteRepositoryGetter,
    );
    this.developers = this.createHasManyRepositoryFactoryFor(
      'developers',
      developerRepositoryGetter,
    );
    this.developerId = this.createBelongsToAccessorFor(
      'developerId',
      developerRepositoryGetter,
    );
  }
}
