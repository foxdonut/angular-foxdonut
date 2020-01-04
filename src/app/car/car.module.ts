import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as fromCar from './reducers';
import { CarComponent } from './car/car.component';
import { CarEntityService } from './car-entity.service';
import { CarDataService } from './car-data.service';
import { EntityDataService } from '@ngrx/data';

@NgModule({
  declarations: [CarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromCar.carFeatureKey, fromCar.reducers)
  ],
  exports: [
    CarComponent
  ],
  providers: [
    CarEntityService,
    CarDataService
  ]
})
export class CarModule {
  constructor(private entityDataService: EntityDataService, private carDataService: CarDataService) {
    entityDataService.registerService('Car', carDataService);
  }
}
