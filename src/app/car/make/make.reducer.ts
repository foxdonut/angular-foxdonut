import { Action, createReducer, on } from '@ngrx/store';

import { selectCarMake } from './make.actions';

export const makeFeatureKey = 'make';

// tslint:disable-next-line:no-empty-interface
export type State = string;

export const initialState: State = '';

const makeReducer = createReducer(
  initialState,
  on(selectCarMake, (state, { make }) => make)
);

export function reducer(state: State | undefined, action: Action) {
  return makeReducer(state, action);
}
