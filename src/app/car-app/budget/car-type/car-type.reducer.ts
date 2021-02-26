import { Action, createReducer, on } from '@ngrx/store';
import { selectCarType } from './car-type.actions';

export const carTypeFeatureKey = 'carType';

export interface CarTypeState {
  selected: number;
}

const initialState: CarTypeState = {
  selected: null
};

const reducer = createReducer(
  initialState,
  on(selectCarType, (state, { selected }) => ({ ...state, selected }))
);

export function carTypeReducer(state: CarTypeState | undefined, action: Action) {
  return reducer(state, action);
}
