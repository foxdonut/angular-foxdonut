import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

import { carEntityMetadata } from './car-app/car/car.model';

const entityMetadata: EntityMetadataMap = {
  Car: carEntityMetadata
};

const pluralNames = {  };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
