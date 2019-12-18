import { Action, createReducer, on } from '@ngrx/store';

export const modelFeatureKey = 'model';

export interface State {
}

export const initialState: State = {
};

const modelReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return modelReducer(state, action);
}
