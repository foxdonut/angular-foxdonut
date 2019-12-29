import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as fromCar from './reducers';
import { CarComponent } from './car/car.component';

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
  ]
})
export class CarModule { }
