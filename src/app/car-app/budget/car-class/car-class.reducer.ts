import { Action, createReducer, on } from '@ngrx/store';
import { selectCarClass } from './car-class.actions';

export const carClassFeatureKey = 'carClass';

export interface CarClassState {
  selected: number;
}

const initialState: CarClassState = {
  selected: null
};

const reducer = createReducer(
  initialState,
  on(selectCarClass, (state, { selected }) => ({ ...state, selected }))
);

export function carClassReducer(state: CarClassState | undefined, action: Action) {
  return reducer(state, action);
}
