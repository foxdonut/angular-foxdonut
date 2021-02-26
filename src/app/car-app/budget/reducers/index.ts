import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { carClassFeatureKey, carClassReducer, CarClassState } from '../car-class/car-class.reducer';
import { carTypeFeatureKey, carTypeReducer, CarTypeState } from '../car-type/car-type.reducer';

export const budgetFeatureKey = 'budget';

export interface BudgetState {
  [carClassFeatureKey]: CarClassState;
  [carTypeFeatureKey]: CarTypeState;
}

export const budgetReducers: ActionReducerMap<BudgetState> = {
  [carClassFeatureKey]: carClassReducer,
  [carTypeFeatureKey]: carTypeReducer,
};

export const budgetMetaReducers: MetaReducer<BudgetState>[] = [];
