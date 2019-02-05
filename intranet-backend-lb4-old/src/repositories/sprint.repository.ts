import { Requisite } from './../models/requisite.model';
import { DefaultCrudRepository, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Sprint } from '../models';
import { DbDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { RequisiteRepository } from '.';

export class SprintRepository extends DefaultCrudRepository<
  Sprint,
  typeof Sprint.prototype.id
  > {


  public readonly requisites: HasManyRepositoryFactory<
    Requisite,
    typeof Requisite.prototype.id
  >;

  constructor(
    @inject('datasources.Db') dataSource: DbDataSource,
    @repository.getter('RequisiteRepository')
    protected requisitesRepositoryGetter: Getter<RequisiteRepository>,
  ) {
    super(Sprint, dataSource);
    this.requisites = this.createHasManyRepositoryFactoryFor(
      'requisites',
      requisitesRepositoryGetter,
    );
  }
}
