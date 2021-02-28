import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { budgetFeatureKey, budgetReducers, budgetMetaReducers } from './reducers';
import { BudgetComponent } from './components/budget.component';

@NgModule({
  declarations: [
    BudgetComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(budgetFeatureKey, budgetReducers, { metaReducers: budgetMetaReducers })
  ],
  exports: [
    BudgetComponent
  ]
})
export class BudgetModule { }
