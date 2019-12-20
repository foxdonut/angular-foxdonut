import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import * as fromBudget from './reducers';
import { BudgetComponent } from './budget/budget.component';

@NgModule({
  declarations: [BudgetComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromBudget.budgetFeatureKey, fromBudget.reducers, { metaReducers: fromBudget.metaReducers })
  ],
  exports: [
    BudgetComponent
  ]
})
export class BudgetModule { }
