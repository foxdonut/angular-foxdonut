import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter.component';
import { CounterRoutingModule } from './counter-routing.module';
import { counterFeatureKey, counterReducer } from './counter.reducer';

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    StoreModule.forFeature(counterFeatureKey, counterReducer)
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule { }
