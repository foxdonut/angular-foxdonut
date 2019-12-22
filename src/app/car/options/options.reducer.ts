import { Action, createReducer, on } from '@ngrx/store';

export const optionsFeatureKey = 'options';

export type State = Record<string, boolean>;

export const initialState: State = { };

const optionsReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return optionsReducer(state, action);
}
