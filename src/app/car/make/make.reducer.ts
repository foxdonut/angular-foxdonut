import { Action, createReducer, on } from '@ngrx/store';

export const makeFeatureKey = 'make';

export interface State {
}

export const initialState: State = {
};

const makeReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return makeReducer(state, action);
}
