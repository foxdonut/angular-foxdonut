import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

import { carEntityMetadata } from './car/car.model';

const entityMetadata: EntityMetadataMap = {
  Car: carEntityMetadata
};

const pluralNames = {  };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
