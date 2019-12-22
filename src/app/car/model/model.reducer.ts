import { Action, createReducer, on } from '@ngrx/store';

import { selectCarModel } from './model.actions';

export const modelFeatureKey = 'model';

export type State = string;

export const initialState: State = '';

const modelReducer = createReducer(
  initialState,
  on(selectCarModel, (state, { model }) => model)
);

export function reducer(state: State | undefined, action: Action) {
  return modelReducer(state, action);
}
