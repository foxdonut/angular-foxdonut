import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromBudget from './reducers';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBudget.budgetFeatureKey, fromBudget.reducers, { metaReducers: fromBudget.metaReducers })
  ]
})
export class BudgetModule { }
