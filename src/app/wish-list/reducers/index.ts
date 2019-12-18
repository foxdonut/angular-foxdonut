import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

export const wishListFeatureKey = 'wishList';

export interface State {
}

export const reducers: ActionReducerMap<State> = {

};

export const metaReducers: MetaReducer<State>[] = [];
