import { createReducer, on } from '@ngrx/store';
import { increment, reset } from './counter.actions';

export const counterFeatureKey = 'counter';

const initialState = 0;

const reducer = createReducer(initialState,
  on(increment, (state, { amount }) => state + amount),
  on(reset, () => 0),
);

export function counterReducer(state, action) {
  return reducer(state, action);
}
