import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromMake from '../make/make.reducer';
import * as fromModel from '../model/model.reducer';

export const carFeatureKey = 'car';

export interface State {
  [fromMake.makeFeatureKey]: fromMake.State;
  [fromModel.modelFeatureKey]: fromModel.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromMake.makeFeatureKey]: fromMake.reducer,
  [fromModel.modelFeatureKey]: fromModel.reducer,
};
