import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromSavedCars from '../saved-cars/saved-cars.reducer';

export const wishListFeatureKey = 'wishList';

export interface State {
  [fromSavedCars.savedCarsFeatureKey]: fromSavedCars.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromSavedCars.savedCarsFeatureKey]: fromSavedCars.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
