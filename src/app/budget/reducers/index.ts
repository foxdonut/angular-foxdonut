import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromCarClass from '../car-class/car-class.reducer';
import * as fromCarType from '../car-type/car-type.reducer';

export const budgetFeatureKey = 'budget';

export interface State {

  [fromCarClass.carClassFeatureKey]: fromCarClass.State;
  [fromCarType.carTypeFeatureKey]: fromCarType.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromCarClass.carClassFeatureKey]: fromCarClass.reducer,
  [fromCarType.carTypeFeatureKey]: fromCarType.reducer,
};


export const metaReducers: MetaReducer<State>[] = [];
