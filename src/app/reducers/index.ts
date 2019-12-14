import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import { counterReducer } from '../counter/counter.reducer';

export interface State {
  counter: number;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
