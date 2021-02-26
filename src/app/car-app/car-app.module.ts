import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetModule } from './budget/budget.module';
import { CarModule } from './car/car.module';
import { WishListModule } from './wish-list/wish-list.module';
import { CarAppComponent } from './car-app.component';
import { CarAppRoutingModule } from './car-app-routing.module';

@NgModule({
  declarations: [
    CarAppComponent
  ],
  imports: [
    CommonModule,
    BudgetModule,
    CarModule,
    WishListModule,
    CarAppRoutingModule
  ],
  exports: [
    CarAppComponent
  ]
})
export class CarAppModule { }

