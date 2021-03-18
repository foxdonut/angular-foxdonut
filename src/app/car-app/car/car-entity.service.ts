import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

import { Car } from './car.model';

@Injectable()
export class CarEntityService extends EntityCollectionServiceBase<Car> {
  constructor(private serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Car', serviceElementsFactory);
  }
}
