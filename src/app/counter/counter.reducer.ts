import { createReducer, on } from '@ngrx/store';
import { increment, reset } from './counter.actions';

export const initialState = 0;

const counterReducerFn = createReducer(initialState,
  on(increment, (state, { amount }) => state + amount),
  on(reset, state => 0),
);

export function counterReducer(state, action) {
  return counterReducerFn(state, action);
}
